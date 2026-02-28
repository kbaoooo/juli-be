import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateContentDto {
  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  source: string;

  @IsString()
  @IsOptional()
  title?: string;
}

export class UpdateContentDto {
  @IsString()
  @IsOptional()
  title?: string;
}
