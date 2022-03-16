import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as cookieParser from 'cookie-parser';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:3000', 'https://movie-reviewer.netlify.app']
    }
  });
  app.use(cookieParser());
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT || 3200).then(() => {
    console.log('YEAH!! http://localhost:3200');
  });
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
