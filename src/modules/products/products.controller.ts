import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { CreateProductImageDto } from './dto/create-product-image.dto';
import { ProductsService } from './products.service';

@ApiBearerAuth()
@ApiTags('products')
@Controller('products')
@UseGuards(JwtAuthGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // ─── LIST ──────────────────────────────────────────────────────────────────

  @Get()
  @ApiOperation({ summary: 'List all products for authenticated seller' })
  @ApiResponse({ status: 200, description: 'Products list returned' })
  findAll(@CurrentUser() user: JwtPayload) {
    return this.productsService.findAll(user.sub);
  }

  // ─── LOW STOCK ─────────────────────────────────────────────────────────────

  @Get('low-stock')
  @ApiOperation({ summary: 'Get products with low stock (≤5 units)' })
  getLowStock(@CurrentUser() user: JwtPayload) {
    return this.productsService.getLowStock(user.sub);
  }

  @Get('out-of-stock')
  @ApiOperation({ summary: 'Get out-of-stock products' })
  getOutOfStock(@CurrentUser() user: JwtPayload) {
    return this.productsService.getOutOfStock(user.sub);
  }

  // ─── FIND ONE ──────────────────────────────────────────────────────────────

  @Get(':id')
  @ApiOperation({ summary: 'Get a single product' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({ status: 200, description: 'Product found' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  findOne(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    return this.productsService.findOne(id, user.sub);
  }

  // ─── CREATE ────────────────────────────────────────────────────────────────

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ status: 201, description: 'Product created' })
  @ApiResponse({ status: 403, description: 'Plan product limit reached' })
  @ApiResponse({ status: 404, description: 'Store not found' })
  create(@CurrentUser() user: JwtPayload, @Body() payload: CreateProductDto) {
    return this.productsService.create(user.sub, payload);
  }

  // ─── UPDATE ────────────────────────────────────────────────────────────────

  @Put(':id')
  @ApiOperation({ summary: 'Update product details' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({ status: 200, description: 'Product updated' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  update(
    @CurrentUser() user: JwtPayload,
    @Param('id') id: string,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(id, user.sub, payload);
  }

  // ─── TOGGLE ACTIVE ─────────────────────────────────────────────────────────

  @Patch(':id/activate')
  @ApiOperation({ summary: 'Activate a product (make visible in store)' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  activate(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    return this.productsService.toggleActive(id, user.sub, true);
  }

  @Patch(':id/deactivate')
  @ApiOperation({ summary: 'Deactivate a product (hide from store)' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  deactivate(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    return this.productsService.toggleActive(id, user.sub, false);
  }

  // ─── STOCK ─────────────────────────────────────────────────────────────────

  @Put(':id/stock')
  @ApiOperation({ summary: 'Update product stock quantity' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({ status: 200, description: 'Stock updated' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  updateStock(
    @CurrentUser() user: JwtPayload,
    @Param('id') id: string,
    @Body() payload: UpdateStockDto,
  ) {
    return this.productsService.updateStock(id, user.sub, payload.quantity);
  }

  // ─── IMAGES ────────────────────────────────────────────────────────────────

  @Post(':id/images')
  @ApiOperation({ summary: 'Add an image to a product' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  addImage(
    @CurrentUser() user: JwtPayload,
    @Param('id') id: string,
    @Body() payload: CreateProductImageDto,
  ) {
    return this.productsService.addImage(id, user.sub, payload);
  }

  @Delete(':id/images/:imageId')
  @ApiOperation({ summary: 'Remove a product image' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiParam({ name: 'imageId', description: 'Image ID' })
  removeImage(
    @CurrentUser() user: JwtPayload,
    @Param('id') id: string,
    @Param('imageId') imageId: string,
  ) {
    return this.productsService.removeImage(imageId, id, user.sub);
  }

  @Patch(':id/images/:imageId/primary')
  @ApiOperation({ summary: 'Set an image as the primary product image' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiParam({ name: 'imageId', description: 'Image ID' })
  setPrimaryImage(
    @CurrentUser() user: JwtPayload,
    @Param('id') id: string,
    @Param('imageId') imageId: string,
  ) {
    return this.productsService.setPrimaryImage(imageId, id, user.sub);
  }

  // ─── DELETE ────────────────────────────────────────────────────────────────

  @Delete(':id')
  @ApiOperation({ summary: 'Soft delete a product (hides from store)' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({ status: 200, description: 'Product deleted' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  remove(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    return this.productsService.remove(id, user.sub);
  }
}
