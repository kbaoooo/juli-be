import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/decorators/roles.decorator';
import { WorkspaceRole } from '../auth/enums/role.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { WorkspaceGuard } from '../auth/guards/workspace.guard';
import { WorkspacesService } from './workspaces.service';

@Controller('workspaces')
@UseGuards(SupabaseAuthGuard)
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Get()
  async findAll() {
    return this.workspacesService.findAll();
  }

  @Get(':workspaceId/protected')
  @UseGuards(WorkspaceGuard, RolesGuard)
  @Roles(WorkspaceRole.EDITOR) // Any role >= EDITOR (so Owner and Editor)
  async getProtected(@Param('workspaceId') workspaceId: string) {
    return {
      message: 'You have access to this workspace',
      workspaceId,
    };
  }
}
