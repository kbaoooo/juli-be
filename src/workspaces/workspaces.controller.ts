import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { WorkspaceRole } from '../auth/enums/role.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { WorkspaceGuard } from '../auth/guards/workspace.guard';
import { AddMemberDto, CreateWorkspaceDto, UpdateMemberRoleDto } from './dto/workspaces.dto';
import { WorkspacesService } from './workspaces.service';

@Controller('workspaces')
@UseGuards(SupabaseAuthGuard)
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  // ─── Workspace CRUD ────────────────────────────────────────────────────────

  @Get()
  findAll(@CurrentUser() user: any) {
    return this.workspacesService.findAll(user.id);
  }

  @Post()
  create(@CurrentUser() user: any, @Body() dto: CreateWorkspaceDto) {
    return this.workspacesService.create(user.id, dto);
  }

  @Get(':workspaceId')
  @UseGuards(WorkspaceGuard)
  findOne(@Param('workspaceId') workspaceId: string) {
    return this.workspacesService.findOne(workspaceId);
  }

  @Delete(':workspaceId')
  @UseGuards(WorkspaceGuard, RolesGuard)
  @Roles(WorkspaceRole.OWNER)
  remove(@Param('workspaceId') workspaceId: string) {
    return this.workspacesService.remove(workspaceId);
  }

  // ─── Member Management ─────────────────────────────────────────────────────

  @Get(':workspaceId/members')
  @UseGuards(WorkspaceGuard)
  getMembers(@Param('workspaceId') workspaceId: string) {
    return this.workspacesService.getMembers(workspaceId);
  }

  @Post(':workspaceId/members')
  @UseGuards(WorkspaceGuard, RolesGuard)
  @Roles(WorkspaceRole.OWNER)
  addMember(
    @Param('workspaceId') workspaceId: string,
    @Body() dto: AddMemberDto,
  ) {
    return this.workspacesService.addMember(workspaceId, dto);
  }

  @Patch(':workspaceId/members/:userId')
  @UseGuards(WorkspaceGuard, RolesGuard)
  @Roles(WorkspaceRole.OWNER)
  updateMemberRole(
    @Param('workspaceId') workspaceId: string,
    @Param('userId') userId: string,
    @Body() dto: UpdateMemberRoleDto,
  ) {
    return this.workspacesService.updateMemberRole(workspaceId, userId, dto);
  }

  @Delete(':workspaceId/members/:userId')
  @UseGuards(WorkspaceGuard, RolesGuard)
  @Roles(WorkspaceRole.OWNER)
  removeMember(
    @Param('workspaceId') workspaceId: string,
    @Param('userId') userId: string,
  ) {
    return this.workspacesService.removeMember(workspaceId, userId);
  }
}
