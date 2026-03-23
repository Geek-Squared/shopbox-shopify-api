import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @ApiPropertyOptional({ example: 'seller@example.com' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ minLength: 2 })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ pattern: '^[a-z0-9-]{3,32}$' })
  @IsString()
  @Matches(/^[a-z0-9-]{3,32}$/)
  storeSlug: string;

  @ApiProperty({ example: '+1234567890' })
  @IsString()
  phone: string;
}
