import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import cookieParser from 'cookie-parser';
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:3000', 'https://movie.v-thomas.xyz'],
      credentials: true
    }
  });
  app.use(cookieParser());
  app.setGlobalPrefix('/thunder');

  app.listen(3200);
}
bootstrap();
