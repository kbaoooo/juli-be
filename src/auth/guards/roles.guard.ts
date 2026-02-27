import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { RoleHierarchy, WorkspaceRole } from '../enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<WorkspaceRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const membership = request.workspaceMember;

    if (!membership) {
      throw new ForbiddenException('No workspace membership found');
    }

    const userRole = membership.role as WorkspaceRole;
    const userRoleValue = RoleHierarchy[userRole] || 0;

    // Find the minimum required hierarchy value among the specified roles
    const minRequiredValue = Math.min(
      ...requiredRoles.map((role) => RoleHierarchy[role] || 0),
    );

    const hasPermission = userRoleValue >= minRequiredValue;

    if (!hasPermission) {
      throw new ForbiddenException(
        `Required at least: ${requiredRoles.join(', ')}. Your role: ${userRole}`,
      );
    }

    return true;
  }
}
