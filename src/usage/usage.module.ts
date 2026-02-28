import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UsageController } from './usage.controller';
import { UsageService } from './usage.service';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [UsageController],
  providers: [UsageService],
})
export class UsageModule {}
