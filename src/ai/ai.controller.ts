import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { WorkspaceGuard } from '../auth/guards/workspace.guard';
import { AiService } from './ai.service';

@Controller('workspaces/:workspaceId')
@UseGuards(SupabaseAuthGuard, WorkspaceGuard)
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('contents/:contentId/analyze')
  analyze(
    @Param('workspaceId') workspaceId: string,
    @Param('contentId') contentId: string,
  ) {
    return this.aiService.analyze(workspaceId, contentId);
  }

  @Get('insights/pattern')
  getPatterns(@Param('workspaceId') workspaceId: string) {
    return this.aiService.getPatterns(workspaceId);
  }
}
