import { PassportSerializer } from '@nestjs/passport';
import passport from 'passport';

export class Serializer extends PassportSerializer {
  constructor() {
    super();
  }
  deserializeUser(payload: any, done: (f: any, F: any) => any) {
    console.log('DE', payload);
    return done(null, payload);
  }
  serializeUser(user: any, done: (f: any, kk: any) => any) {
    console.log('SE', user);
    return done(null, user);
  }

  override getPassportInstance(): passport.PassportStatic {
    return passport;
  }
}
