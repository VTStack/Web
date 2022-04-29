import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-discord';

export class DiscordStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: '799335014314934272',
      clientSecret: 'otwrZqYvW3j81JLNJPjmMTfpdovRy52l',
      callbackURL: 'http://localhost:3333/auth/callback',
      scope: ['identify', 'guilds']
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile
    // done: any
  ) {
    const { username, id: userId, avatar, email, provider } = profile;
    return { username, id: userId, avatar, email, provider };
    // done(null, { username, userId, avatar, email, provider });
    // console.log(accessToken, refreshToken, profile, done(null, {}));
    // const encryptedAccessToken = encrypt(accessToken).toString();
    // const encryptedRefreshToken = encrypt(refreshToken).toString();
    // const { id: discordId, email, discriminator, username, avatar } = profile;
    // const user = await this.authService.validateUser({
    //   discordId,
    //   email,
    //   discordTag: `${username}#${discriminator}`,
    //   avatar,
    // });
    // await this.authService.validateOAuth2({
    //   discordId,
    //   accessToken: encryptedAccessToken,
    //   refreshToken: encryptedRefreshToken,
    // });
    // done(null, user);
  }
}
