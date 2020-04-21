import { NestFactory } from '@nestjs/core';
import { configure } from './config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  configure();

  const { AppModule } = await import('./app.module');
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  await app.listen(process.env.PORT);
}

bootstrap();
