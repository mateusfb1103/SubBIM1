// users.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService, User } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: Partial<User>) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: Partial<User>) {
    return this.usersService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usersService.delete(Number(id));
  }
}
