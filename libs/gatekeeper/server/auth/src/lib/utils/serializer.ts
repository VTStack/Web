import { PassportSerializer } from '@nestjs/passport';
import passport from 'passport';

export class Serializer extends PassportSerializer {
  constructor() {
    super();
  }
  deserializeUser(payload: unknown, done: (f: unknown, F: unknown) => unknown) {
    console.log('DE', payload);
    return done(null, payload);
  }
  serializeUser(user: unknown, done: (f: unknown, kk: unknown) => unknown) {
    console.log('SE', user);
    return done(null, user);
  }

  override getPassportInstance(): passport.PassportStatic {
    return passport;
  }
}
