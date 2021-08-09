import { Module } from '@nestjs/common';
import { ItemsModule } from './business/items/items.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ItemsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class ProductsModule {}
