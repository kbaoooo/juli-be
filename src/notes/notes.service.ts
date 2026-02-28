import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNoteDto } from './dto/notes.dto';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  async create(workspaceId: string, contentId: string, dto: CreateNoteDto) {
    const content = await this.prisma.saved_contents.findFirst({
      where: { id: contentId, workspace_id: workspaceId },
    });
    if (!content) throw new NotFoundException('Content not found');

    return this.prisma.notes.create({
      data: { content_id: contentId, text: dto.text },
    });
  }

  async remove(noteId: string) {
    const note = await this.prisma.notes.findUnique({ where: { id: noteId } });
    if (!note) throw new NotFoundException('Note not found');
    await this.prisma.notes.delete({ where: { id: noteId } });
    return { message: 'Note deleted' };
  }
}
