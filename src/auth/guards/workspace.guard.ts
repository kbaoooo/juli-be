import {
    BadRequestException,
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class WorkspaceGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      return false;
    }

    // Try to get workspaceId from params or headers
    const workspaceId =
      request.params.workspaceId || request.headers['x-workspace-id'];

    if (!workspaceId) {
      throw new BadRequestException('Workspace ID is required');
    }

    const membership = await this.prisma.workspace_members.findUnique({
      where: {
        workspace_id_user_id: {
          workspace_id: workspaceId,
          user_id: user.id,
        },
      },
    });

    if (!membership) {
      throw new ForbiddenException('You are not a member of this workspace');
    }

    // Attach membership details to request for RolesGuard to use
    request.workspaceMember = membership;
    request.workspaceId = workspaceId;

    return true;
  }
}
