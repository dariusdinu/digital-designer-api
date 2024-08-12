import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsNotEmpty()
  images?: string[];

  @IsUrl()
  @IsNotEmpty()
  clientSiteLink: string;

  @IsString()
  category: string;

  @IsBoolean()
  @IsOptional()
  isShown: boolean;
}
