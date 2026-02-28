import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AttachTagDto, CreateTagDto } from './dto/tags.dto';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  async findAll(workspaceId: string) {
    return this.prisma.tags.findMany({ where: { workspace_id: workspaceId } });
  }

  async create(workspaceId: string, dto: CreateTagDto) {
    try {
      return await this.prisma.tags.create({
        data: { workspace_id: workspaceId, name: dto.name, type: dto.type },
      });
    } catch {
      throw new ConflictException('Tag with this name already exists');
    }
  }

  async remove(workspaceId: string, tagId: string) {
    const tag = await this.prisma.tags.findFirst({
      where: { id: tagId, workspace_id: workspaceId },
    });
    if (!tag) throw new NotFoundException('Tag not found');
    await this.prisma.tags.delete({ where: { id: tagId } });
    return { message: 'Tag deleted' };
  }

  async attachTag(workspaceId: string, contentId: string, dto: AttachTagDto) {
    // Verify content belongs to workspace
    const content = await this.prisma.saved_contents.findFirst({
      where: { id: contentId, workspace_id: workspaceId },
    });
    if (!content) throw new NotFoundException('Content not found');

    try {
      return await this.prisma.contents_tags.create({
        data: { content_id: contentId, tag_id: dto.tag_id },
      });
    } catch {
      throw new ConflictException('Tag already attached to this content');
    }
  }

  async detachTag(workspaceId: string, contentId: string, tagId: string) {
    const content = await this.prisma.saved_contents.findFirst({
      where: { id: contentId, workspace_id: workspaceId },
    });
    if (!content) throw new NotFoundException('Content not found');

    const link = await this.prisma.contents_tags.findFirst({
      where: { content_id: contentId, tag_id: tagId },
    });
    if (!link) throw new NotFoundException('Tag not attached to content');

    await this.prisma.contents_tags.delete({ where: { id: link.id } });
    return { message: 'Tag detached' };
  }
}
