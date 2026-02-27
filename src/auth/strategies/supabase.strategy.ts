import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SupabaseStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const jwtSecret = configService.get<string>('SUPABASE_JWT_SECRET');
    if (!jwtSecret) {
      throw new Error('SUPABASE_JWT_SECRET is not defined in environment variables');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate(payload: any) {
    // Supabase JWT payload contains 'sub' as the user ID
    // and 'email' (if email auth or OAuth provider returned it)
    const userId = payload.sub;
    const email = payload.email || ''; 

    let user = await this.prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      // Auto-create user if they exist in Supabase but not in our DB
      // This is common if they sign in via OAuth (Google, Github) directly
      try {
        await this.prisma.$transaction(async (tx) => {
          user = await tx.users.create({
            data: {
              id: userId,
              email: email,
              plan: 'free',
              name: user?.name || email.split('@')[0],
            },
          });

          const workspace = await tx.workspaces.create({
            data: {
              owner_id: userId,
              name: `My Workspace`,
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
        });
      } catch (error) {
        console.error('Failed to auto-create user on login:', error);
        return null; // Reject token if we can't create the local user
      }
    }

    return user;
  }
}
