import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './products.module';
import configuration from './config/configuration';

async function products() {
  const app = await NestFactory.create(ProductsModule);
  await app.listen(configuration().port);
}
products();
