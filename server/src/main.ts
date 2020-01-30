import { NestFactory } from '@nestjs/core';
import { configure } from './config';

async function bootstrap() {
  configure();

  const { AppModule } = await import('./app.module');
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}

bootstrap();
