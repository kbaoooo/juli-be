import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '../prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SupabaseStrategy } from './strategies/supabase.strategy';

@Module({
  imports: [PassportModule, ConfigModule],
  providers: [AuthService, SupabaseStrategy, PrismaService],
  controllers: [AuthController],
  exports: [PassportModule, SupabaseStrategy, AuthService],
})
export class AuthModule {}
