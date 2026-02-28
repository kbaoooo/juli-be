import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddCollectionItemDto, CreateCollectionDto } from './dto/collections.dto';

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}

  async findAll(workspaceId: string) {
    return this.prisma.collections.findMany({
      where: { workspace_id: workspaceId },
      include: { collection_items: { include: { saved_contents: true } } },
    });
  }

  async create(workspaceId: string, userId: string, dto: CreateCollectionDto) {
    return this.prisma.collections.create({
      data: {
        workspace_id: workspaceId,
        created_by: userId,
        name: dto.name,
        description: dto.description ?? '',
      },
    });
  }

  async addItem(
    workspaceId: string,
    collectionId: string,
    dto: AddCollectionItemDto,
  ) {
    const collection = await this.prisma.collections.findFirst({
      where: { id: collectionId, workspace_id: workspaceId },
    });
    if (!collection) throw new NotFoundException('Collection not found');

    try {
      return await this.prisma.collection_items.create({
        data: { collection_id: collectionId, content_id: dto.content_id },
      });
    } catch {
      throw new ConflictException('Content already in collection');
    }
  }

  async removeItem(
    workspaceId: string,
    collectionId: string,
    contentId: string,
  ) {
    const collection = await this.prisma.collections.findFirst({
      where: { id: collectionId, workspace_id: workspaceId },
    });
    if (!collection) throw new NotFoundException('Collection not found');

    const item = await this.prisma.collection_items.findFirst({
      where: { collection_id: collectionId, content_id: contentId },
    });
    if (!item) throw new NotFoundException('Item not found in collection');

    await this.prisma.collection_items.delete({ where: { id: item.id } });
    return { message: 'Item removed from collection' };
  }
}
