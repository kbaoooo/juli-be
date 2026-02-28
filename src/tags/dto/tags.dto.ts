import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateTagDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;
}

export class AttachTagDto {
  @IsUUID()
  @IsNotEmpty()
  tag_id: string;
}
