import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    UseGuards,
} from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { WorkspaceGuard } from '../auth/guards/workspace.guard';
import { CollectionsService } from './collections.service';
import { AddCollectionItemDto, CreateCollectionDto } from './dto/collections.dto';

@Controller('workspaces/:workspaceId/collections')
@UseGuards(SupabaseAuthGuard, WorkspaceGuard)
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Get()
  findAll(@Param('workspaceId') workspaceId: string) {
    return this.collectionsService.findAll(workspaceId);
  }

  @Post()
  create(
    @Param('workspaceId') workspaceId: string,
    @CurrentUser() user: any,
    @Body() dto: CreateCollectionDto,
  ) {
    return this.collectionsService.create(workspaceId, user.id, dto);
  }

  @Post(':collectionId/items')
  addItem(
    @Param('workspaceId') workspaceId: string,
    @Param('collectionId') collectionId: string,
    @Body() dto: AddCollectionItemDto,
  ) {
    return this.collectionsService.addItem(workspaceId, collectionId, dto);
  }

  @Delete(':collectionId/items/:contentId')
  removeItem(
    @Param('workspaceId') workspaceId: string,
    @Param('collectionId') collectionId: string,
    @Param('contentId') contentId: string,
  ) {
    return this.collectionsService.removeItem(workspaceId, collectionId, contentId);
  }
}
