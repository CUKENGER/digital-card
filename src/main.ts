import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const defaultHelmet = helmet();
  const sandboxHelmet = helmet({ contentSecurityPolicy: false });

  app.use((req: Request, res: Response, next: NextFunction) => {
    const middleware =
      req.method === 'GET' && req.path === '/graphql'
        ? sandboxHelmet
        : defaultHelmet;

    middleware(req, res, next);
  });

  app.enableCors({
    origin: '*',
    credentials: false,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableShutdownHooks();

  const port = configService.get<number>('PORT', 3000);
  await app.listen(port, '0.0.0.0');
}
void bootstrap();
