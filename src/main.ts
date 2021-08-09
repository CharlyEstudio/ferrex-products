import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './products.module';
import configuration from './config/configuration';

async function products() {
  const app = await NestFactory.create(ProductsModule, {
    cors: true,
    logger: ['warn', 'error'],
  });
  await app.listen(configuration().port);
  console.log(`Products Service in the port: ${configuration().port}`);
}
products();
