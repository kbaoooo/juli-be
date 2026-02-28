import {
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContentDto, UpdateContentDto } from './dto/contents.dto';

@Injectable()
export class ContentsService {
  constructor(private prisma: PrismaService) {}

  async create(workspaceId: string, userId: string, dto: CreateContentDto) {
    return this.prisma.saved_contents.create({
      data: {
        workspace_id: workspaceId,
        created_by: userId,
        url: dto.url,
        source: dto.source,
        title: dto.title,
        thumbnail_url: '',
        metadata: {},
      },
    });
  }

  async findAll(workspaceId: string, page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      this.prisma.saved_contents.findMany({
        where: { workspace_id: workspaceId },
        skip,
        take: limit,
        orderBy: { created_at: 'desc' },
        include: {
          contents_tags: { include: { tags: true } },
        },
      }),
      this.prisma.saved_contents.count({ where: { workspace_id: workspaceId } }),
    ]);

    return {
      data,
      meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOne(workspaceId: string, contentId: string) {
    const content = await this.prisma.saved_contents.findFirst({
      where: { id: contentId, workspace_id: workspaceId },
      include: {
        contents_tags: { include: { tags: true } },
        ai_insights: true,
        notes: true,
      },
    });
    if (!content) throw new NotFoundException('Content not found');
    return content;
  }

  async update(
    workspaceId: string,
    contentId: string,
    dto: UpdateContentDto,
  ) {
    const content = await this.prisma.saved_contents.findFirst({
      where: { id: contentId, workspace_id: workspaceId },
    });
    if (!content) throw new NotFoundException('Content not found');

    return this.prisma.saved_contents.update({
      where: { id: contentId },
      data: { title: dto.title },
    });
  }

  async remove(workspaceId: string, contentId: string, userId: string) {
    const content = await this.prisma.saved_contents.findFirst({
      where: { id: contentId, workspace_id: workspaceId },
    });
    if (!content) throw new NotFoundException('Content not found');
    if (content.created_by !== userId)
      throw new ForbiddenException('Only the creator can delete this content');

    await this.prisma.saved_contents.delete({ where: { id: contentId } });
    return { message: 'Content deleted' };
  }
}
