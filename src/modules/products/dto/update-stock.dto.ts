import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';

export class UpdateStockDto {
  @ApiProperty({
    minimum: 0,
    example: 50,
    description: 'New absolute stock quantity',
  })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  quantity: number;
}