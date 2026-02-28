import { Body, Controller, Delete, Param, Post, UseGuards } from '@nestjs/common';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { WorkspaceGuard } from '../auth/guards/workspace.guard';
import { CreateNoteDto } from './dto/notes.dto';
import { NotesService } from './notes.service';

@Controller()
@UseGuards(SupabaseAuthGuard)
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post('workspaces/:workspaceId/contents/:contentId/notes')
  @UseGuards(WorkspaceGuard)
  create(
    @Param('workspaceId') workspaceId: string,
    @Param('contentId') contentId: string,
    @Body() dto: CreateNoteDto,
  ) {
    return this.notesService.create(workspaceId, contentId, dto);
  }

  @Delete('notes/:noteId')
  remove(@Param('noteId') noteId: string) {
    return this.notesService.remove(noteId);
  }
}
