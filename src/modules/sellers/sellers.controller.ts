import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { SellersService } from './sellers.service';

@ApiBearerAuth()
@ApiTags('sellers')
@Controller('sellers')
@UseGuards(JwtAuthGuard)
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @Get()
  getProfile(@CurrentUser() user: JwtPayload) {
    return this.sellersService.getProfile(user.sub);
  }

  @Put()
  updateProfile(
    @CurrentUser() user: JwtPayload,
    @Body() payload: UpdateSellerDto,
  ) {
    return this.sellersService.updateProfile(user.sub, payload);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.sellersService.getById(id);
  }
}
