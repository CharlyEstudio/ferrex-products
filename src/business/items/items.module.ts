import { Module } from '@nestjs/common';
import { ItemsService } from './service/items.service';
import { ItemsController } from './controller/items.controller';

@Module({
  providers: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
