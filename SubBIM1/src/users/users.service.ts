// users.service.ts
import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  username: string;
  password: string;
  role: string; 
}

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  create(user: Partial<User>): User {
    const newUser = { id: this.idCounter++, role: 'user', ...user } as User;
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUser: Partial<User>): User | null {
    const user = this.findOne(id);
    if (!user) return null;

    Object.assign(user, updateUser);
    return user;
  }

  delete(id: number): boolean {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}
