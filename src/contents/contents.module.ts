import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [ContentsController],
  providers: [ContentsService],
  exports: [ContentsService],
})
export class ContentsModule {}
