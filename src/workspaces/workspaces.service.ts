import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddMemberDto, CreateWorkspaceDto, UpdateMemberRoleDto } from './dto/workspaces.dto';

@Injectable()
export class WorkspacesService {
  constructor(private prisma: PrismaService) {}

  // ─── Workspaces ────────────────────────────────────────────────────────────

  async findAll(userId: string) {
    const memberships = await this.prisma.workspace_members.findMany({
      where: { user_id: userId },
      include: { workspaces: true },
    });

    return memberships.map((m) => ({
      id: m.workspaces.id,
      name: m.workspaces.name,
      role: m.role,
      is_personal: m.workspaces.is_personal,
    }));
  }

  async create(ownerId: string, dto: CreateWorkspaceDto) {
    return this.prisma.$transaction(async (tx) => {
      const workspace = await tx.workspaces.create({
        data: {
          owner_id: ownerId,
          name: dto.name,
          is_personal: false,
        },
      });

      await tx.workspace_members.create({
        data: {
          workspace_id: workspace.id,
          user_id: ownerId,
          role: 'owner',
        },
      });

      return workspace;
    });
  }

  async findOne(id: string) {
    const workspace = await this.prisma.workspaces.findUnique({
      where: { id },
      include: {
        workspace_members: {
          include: { users: { select: { id: true, email: true, name: true } } },
        },
      },
    });
    if (!workspace) throw new NotFoundException('Workspace not found');
    return workspace;
  }

  async remove(id: string) {
    await this.prisma.workspaces.delete({ where: { id } });
    return { message: 'Workspace deleted' };
  }

  // ─── Members ───────────────────────────────────────────────────────────────

  async getMembers(workspaceId: string) {
    return this.prisma.workspace_members.findMany({
      where: { workspace_id: workspaceId },
      include: {
        users: { select: { id: true, email: true, name: true } },
      },
    });
  }

  async addMember(workspaceId: string, dto: AddMemberDto) {
    const existing = await this.prisma.workspace_members.findUnique({
      where: {
        workspace_id_user_id: {
          workspace_id: workspaceId,
          user_id: dto.user_id,
        },
      },
    });
    if (existing) throw new ConflictException('User is already a member');

    return this.prisma.workspace_members.create({
      data: {
        workspace_id: workspaceId,
        user_id: dto.user_id,
        role: dto.role,
      },
    });
  }

  async updateMemberRole(
    workspaceId: string,
    userId: string,
    dto: UpdateMemberRoleDto,
  ) {
    return this.prisma.workspace_members.update({
      where: {
        workspace_id_user_id: {
          workspace_id: workspaceId,
          user_id: userId,
        },
      },
      data: { role: dto.role },
    });
  }

  async removeMember(workspaceId: string, userId: string) {
    await this.prisma.workspace_members.delete({
      where: {
        workspace_id_user_id: {
          workspace_id: workspaceId,
          user_id: userId,
        },
      },
    });
    return { message: 'Member removed' };
  }
}
