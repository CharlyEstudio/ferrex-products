import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  async getProducts(): Promise<string> {
    return 'All products';
  }

  async getProduct(id: number): Promise<string> {
    return `Product with id: ${id}`;
  }

  async saveProduct(product: any): Promise<string> {
    return `Product save: ${JSON.stringify(product)}`;
  }

  async updateProduct(product: any): Promise<string> {
    return `Product update: ${JSON.stringify(product)}`;
  }

  async deleteProduct(id: number): Promise<string> {
    return `Product delete with id: ${JSON.stringify(id)}`;
  }
}
