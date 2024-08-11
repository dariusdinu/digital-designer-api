import {
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

  @IsString()
  @IsNotEmpty()
  imageId: string;

  @IsUrl()
  @IsNotEmpty()
  clientSiteLink: string;

  @IsBoolean()
  isShown: boolean;
}
