import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from '../service/items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async getProducts() {
    return await this.itemsService.getProducts();
  }

  @Get('/:id')
  async getProduct(@Param('id') id: number) {
    return await this.itemsService.getProduct(id);
  }

  @Post()
  async saveProduct(@Body() product: any) {
    return await this.itemsService.saveProduct(product);
  }

  @Put()
  async updateProduct(@Body() product: any) {
    return await this.itemsService.updateProduct(product);
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: number) {
    return await this.itemsService.deleteProduct(id);
  }
}
