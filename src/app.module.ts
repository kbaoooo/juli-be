import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AiModule } from './ai/ai.module';
import { AuthModule } from './auth/auth.module';
import { CollectionsModule } from './collections/collections.module';
import { ContentsModule } from './contents/contents.module';
import { NotesModule } from './notes/notes.module';
import { PrismaModule } from './prisma/prisma.module';
import { TagsModule } from './tags/tags.module';
import { UsageModule } from './usage/usage.module';
import { WorkspacesModule } from './workspaces/workspaces.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    WorkspacesModule,
    ContentsModule,
    TagsModule,
    CollectionsModule,
    NotesModule,
    AiModule,
    UsageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
