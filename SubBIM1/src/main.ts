import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  Logger.log(`Application is running on: ${await app.getUrl()}`, 'Bootstrap');
  Logger.log(`Available routes:`, 'Routes');
  app.getHttpAdapter().getInstance()._router.stack
    .filter((r) => r.route)
    .map((r) => Logger.log(`${Object.keys(r.route.methods).join(', ').toUpperCase()} ${r.route.path}`, 'Route'));
}
bootstrap();
