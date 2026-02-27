import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  private supabase: SupabaseClient;
  private supabaseAdmin: SupabaseClient;

  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseAnonKey = this.configService.get<string>('SUPABASE_ANON_KEY');
    const supabaseServiceKey = this.configService.get<string>('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
      throw new InternalServerErrorException(
        'Missing Supabase configuration (URL, AnonKey, or ServiceRoleKey)',
      );
    }

    this.supabase = createClient(supabaseUrl, supabaseAnonKey);
    
    this.supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }

  // async register(registerDto: RegisterDto) {
  //   const { email, password } = registerDto;

  //   // 1. Supabase SignUp - Gửi mail xác nhận
  //   const { data, error } = await this.supabase.auth.signUp({
  //     email,
  //     password,
  //   });

  //   if (error) {
  //     throw new InternalServerErrorException(error.message);
  //   }

  //   return {
  //     message: 'Registration successful. Please check your email to confirm.',
  //     user: data.user,
  //   };
  // }

  async register(registerDto: RegisterDto) {
    const { email, password, name } = registerDto;

    // 1. Supabase SignUp
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    if (!data.user) {
      throw new InternalServerErrorException('User creation failed');
    }

    const userId = data.user.id;

    // 2. Local DB Sync
    try {
      return await this.prisma.$transaction(async (tx) => {
        const user = await tx.users.create({
          data: {
            id: userId,
            email: email,
            plan: 'free',
            name: name,
          },
        });

        const workspace = await tx.workspaces.create({
          data: {
            owner_id: userId,
            name: `${name}'s Workspace`,
            is_personal: true,
          },
        });

        await tx.workspace_members.create({
          data: {
            workspace_id: workspace.id,
            user_id: userId,
            role: 'owner',
          },
        });

        return {
          user,
          workspace,
          session: data.session,
        };
      });
    } catch (err) {
      const { error: deleteError } = await this.supabaseAdmin.auth.admin.deleteUser(userId);
      if (deleteError) {
        console.error(`Failed to rollback Supabase user ${userId}:`, deleteError);
      }
      throw new InternalServerErrorException('Local database sync failed: ' + err.message);
    }
  }

  async handleWebhook(payload: any, signature: string) {
    const webhookSecret = this.configService.get<string>('WEBHOOK_SECRET');

    if (!webhookSecret || signature !== webhookSecret) {
      throw new UnauthorizedException('Invalid webhook secret');
    }
    
    const { record, type, table } = payload;

    // Chúng ta chỉ quan tâm tới INSERT vào bảng users của Supabase Auth
    if (type !== 'INSERT' || table !== 'users') {
      return { skipped: true };
    }

    const userId = record.id;
    const email = record.email;
    const name = email.split('@')[0]; // Lấy tạm name từ email

    try {
      return await this.prisma.$transaction(async (tx) => {
        // Kiểm tra xem user đã tồn tại chưa (để tránh lỗi nếu webhook bị gọi lặp)
        const existingUser = await tx.users.findUnique({
          where: { id: userId },
        });

        if (existingUser) {
          return { message: 'User already exists' };
        }

        // Tạo user local
        const user = await tx.users.create({
          data: {
            id: userId,
            email: email,
            plan: 'free',
            name: name,
          },
        });

        // Tạo default personal workspace
        const workspace = await tx.workspaces.create({
          data: {
            owner_id: userId,
            name: `${name}'s Workspace`,
            is_personal: true,
          },
        });

        // Thêm user làm owner
        await tx.workspace_members.create({
          data: {
            workspace_id: workspace.id,
            user_id: userId,
            role: 'owner',
          },
        });
        console.log('User synced successfully:', user);
        return { user, workspace };
      });
    } catch (err) {
      // ROLLBACK: Xoá user trên Supabase nếu đồng bộ webhook thất bại
      // Điều này đảm bảo không có user "mồ côi" trên Supabase mà không có data local.
      const { error: deleteError } = await this.supabaseAdmin.auth.admin.deleteUser(userId);
      if (deleteError) {
        console.error(`Failed to rollback Supabase user ${userId} during webhook:`, deleteError);
      }
      
      console.error('Webhook sync failed:', err);
      throw new InternalServerErrorException('Failed to sync user via webhook');
    }
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return data;
  }
}
