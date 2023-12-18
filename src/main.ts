import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './app.environments.';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
