import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { DeliveryDto } from './dto/delivery.dto';
import { RidersDto } from './dto/riders.dto';
import { PluginsService } from './plugins.service';

@ApiBearerAuth()
@ApiTags('plugins')
@Controller('plugins')
@UseGuards(JwtAuthGuard)
export class PluginsController {
  constructor(private readonly pluginsService: PluginsService) {}

  @Get()
  list() {
    return this.pluginsService.list();
  }

  @Post('delivery')
  delivery(@Body() payload: DeliveryDto) {
    return this.pluginsService.delivery(payload);
  }

  @Post('delivery/riders')
  riders(@Body() payload: RidersDto) {
    return this.pluginsService.riders(payload);
  }
}
