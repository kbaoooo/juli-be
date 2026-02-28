import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    UseGuards,
} from '@nestjs/common';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { WorkspaceGuard } from '../auth/guards/workspace.guard';
import { AttachTagDto, CreateTagDto } from './dto/tags.dto';
import { TagsService } from './tags.service';

@Controller('workspaces/:workspaceId')
@UseGuards(SupabaseAuthGuard, WorkspaceGuard)
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  // ─── Tags ─────────────────────────────────────────────────────────────────

  @Get('tags')
  findAll(@Param('workspaceId') workspaceId: string) {
    return this.tagsService.findAll(workspaceId);
  }

  @Post('tags')
  create(@Param('workspaceId') workspaceId: string, @Body() dto: CreateTagDto) {
    return this.tagsService.create(workspaceId, dto);
  }

  @Delete('tags/:tagId')
  remove(
    @Param('workspaceId') workspaceId: string,
    @Param('tagId') tagId: string,
  ) {
    return this.tagsService.remove(workspaceId, tagId);
  }

  // ─── Content-Tag Relations ─────────────────────────────────────────────────

  @Post('contents/:contentId/tags')
  attachTag(
    @Param('workspaceId') workspaceId: string,
    @Param('contentId') contentId: string,
    @Body() dto: AttachTagDto,
  ) {
    return this.tagsService.attachTag(workspaceId, contentId, dto);
  }

  @Delete('contents/:contentId/tags/:tagId')
  detachTag(
    @Param('workspaceId') workspaceId: string,
    @Param('contentId') contentId: string,
    @Param('tagId') tagId: string,
  ) {
    return this.tagsService.detachTag(workspaceId, contentId, tagId);
  }
}
