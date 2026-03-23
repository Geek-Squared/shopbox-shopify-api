import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

export class CreateProductImageDto {
  @ApiProperty({ example: 'https://res.cloudinary.com/shopboxx/image/upload/v1/products/shirt.jpg' })
  @IsString()
  @IsUrl()
  imageUrl: string;

  @ApiPropertyOptional({ default: false, description: 'Mark as primary display image' })
  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;

  @ApiPropertyOptional({ default: 0, minimum: 0 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  sortOrder?: number;
}