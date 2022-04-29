/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import passport from 'passport';
import { AppModule } from './app/app.module';
import session from 'express-session';
import MongoStore from 'connect-mongo';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(
    session({
      cookie: {
        maxAge: 3600000 * 24
      },
      secret: 'MY_SECRET',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({
        mongoUrl: process.env['NX_GATEKEEPER_DB'] as string,
        dbName: 'session-store',
        stringify: true,
        serialize: (session: any) => JSON.stringify(session),
        unserialize: (serialized: string) => JSON.parse(serialized)
      })
    })
  );
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
