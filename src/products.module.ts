import { Module } from '@nestjs/common';
import { ItemsModule } from './business/items/items.module';

@Module({
  imports: [ItemsModule],
})
export class ProductsModule {}
