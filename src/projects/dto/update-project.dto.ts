import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class UpdateProjectDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  images?: string[];

  @IsUrl()
  @IsOptional()
  clientSiteLink?: string;

  @IsString()
  category?: string;

  @IsBoolean()
  @IsOptional()
  isShown?: boolean;
}
