import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import cookieParser from 'cookie-parser';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:3000', 'https://movie.v-thomas.xyz']
    }
  });
  app.use(cookieParser());
  app.setGlobalPrefix('/thunder');

  await app.listen(5000);
}
bootstrap();
