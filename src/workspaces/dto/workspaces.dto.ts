import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { WorkspaceRole } from '../../auth/enums/role.enum';

export class CreateWorkspaceDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class AddMemberDto {
  @IsUUID()
  @IsNotEmpty()
  user_id: string;

  @IsEnum(WorkspaceRole)
  role: WorkspaceRole;
}

export class UpdateMemberRoleDto {
  @IsEnum(WorkspaceRole)
  role: WorkspaceRole;
}
