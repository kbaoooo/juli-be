import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UseGuards,
} from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { WorkspaceGuard } from '../auth/guards/workspace.guard';
import { ContentsService } from './contents.service';
import { CreateContentDto, UpdateContentDto } from './dto/contents.dto';

@Controller('workspaces/:workspaceId/contents')
@UseGuards(SupabaseAuthGuard, WorkspaceGuard)
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Post()
  create(
    @Param('workspaceId') workspaceId: string,
    @CurrentUser() user: any,
    @Body() dto: CreateContentDto,
  ) {
    return this.contentsService.create(workspaceId, user.id, dto);
  }

  @Get()
  findAll(
    @Param('workspaceId') workspaceId: string,
    @Query('page') page = '1',
    @Query('limit') limit = '20',
  ) {
    return this.contentsService.findAll(
      workspaceId,
      parseInt(page),
      parseInt(limit),
    );
  }

  @Get(':contentId')
  findOne(
    @Param('workspaceId') workspaceId: string,
    @Param('contentId') contentId: string,
  ) {
    return this.contentsService.findOne(workspaceId, contentId);
  }

  @Patch(':contentId')
  update(
    @Param('workspaceId') workspaceId: string,
    @Param('contentId') contentId: string,
    @Body() dto: UpdateContentDto,
  ) {
    return this.contentsService.update(workspaceId, contentId, dto);
  }

  @Delete(':contentId')
  remove(
    @Param('workspaceId') workspaceId: string,
    @Param('contentId') contentId: string,
    @CurrentUser() user: any,
  ) {
    return this.contentsService.remove(workspaceId, contentId, user.id);
  }
}
