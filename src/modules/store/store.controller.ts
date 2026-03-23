import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { UpdateStoreDto } from './dto/update-store.dto';
import { StoreService } from './store.service';

@ApiTags('store')
@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get(':slug')
  getBySlug(@Param('slug') slug: string) {
    return this.storeService.getBySlug(slug);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch()
  updateStore(
    @CurrentUser() user: JwtPayload,
    @Body() payload: UpdateStoreDto,
  ) {
    return this.storeService.updateStore(user.sub, payload);
  }
}
