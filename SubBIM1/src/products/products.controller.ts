// products.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductsService, Product } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // CREATE
  @Post()
  create(@Body() createProductDto: Partial<Product>) {
    return this.productsService.create(createProductDto);
  }

  // READ ALL
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  // READ ONE
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(Number(id));
  }

  // UPDATE
  @Put(':id')
  update(@Param('id') id: number, @Body() updateProductDto: Partial<Product>) {
    return this.productsService.update(Number(id), updateProductDto);
  }

  // DELETE
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.delete(Number(id));
  }
}
