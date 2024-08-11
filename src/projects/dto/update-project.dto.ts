import { IsBoolean, IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateProjectDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  imageId?: string;

  @IsUrl()
  @IsOptional()
  clientSiteLink?: string;

  @IsBoolean()
  @IsOptional()
  isShown?: boolean;
}
