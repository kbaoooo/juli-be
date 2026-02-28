import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '../prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RolesGuard } from './guards/roles.guard';
import { SupabaseAuthGuard } from './guards/supabase-auth.guard';
import { WorkspaceGuard } from './guards/workspace.guard';
import { MeController } from './me.controller';
import { SupabaseStrategy } from './strategies/supabase.strategy';

@Module({
  imports: [PassportModule, ConfigModule],
  providers: [AuthService, SupabaseStrategy, PrismaService, WorkspaceGuard, RolesGuard, SupabaseAuthGuard],
  controllers: [AuthController, MeController],
  exports: [PassportModule, SupabaseStrategy, AuthService, WorkspaceGuard, RolesGuard, SupabaseAuthGuard],
})
export class AuthModule {}
