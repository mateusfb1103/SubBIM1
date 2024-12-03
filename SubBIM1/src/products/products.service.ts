// products.service.ts
import { Injectable } from '@nestjs/common';

// products.service.ts
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
  }

  
@Injectable()
export class ProductsService {
  private products: Product[] = [];
  private idCounter = 1;

  // CREATE
  create(product: Partial<Product>): Product {
    const newProduct = {
      id: this.idCounter++,
      ...product,
    } as Product;
    this.products.push(newProduct);
    return newProduct;
  }

  // READ ALL
  findAll(): Product[] {
    return this.products;
  }

  // READ ONE
  findOne(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  // UPDATE
  update(id: number, updateProductDto: Partial<Product>): Product | null {
    const product = this.findOne(id);
    if (!product) return null;

    Object.assign(product, updateProductDto);
    return product;
  }

  // DELETE
  delete(id: number): boolean {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) return false;

    this.products.splice(index, 1);
    return true;
  }
}
