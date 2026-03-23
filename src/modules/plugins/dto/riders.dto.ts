import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class RidersDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  zone?: string;
}
