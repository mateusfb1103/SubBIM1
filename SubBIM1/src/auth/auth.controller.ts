import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // Define o prefixo da rota como "/auth"
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login') // Define que esta rota responde ao POST /auth/login
  async login(@Body() loginDto: { username: string; password: string }) {
    return this.authService.login(loginDto);
  }
}
