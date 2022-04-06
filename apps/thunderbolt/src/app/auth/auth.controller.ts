import { Body, Controller, Get, HttpCode, Post, Query, Req, Res } from '@nestjs/common';
import { UseAuth } from '../decorators/guard';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('login')
  @HttpCode(200)
  @UseAuth('local')
  async Login(@Res({ passthrough: true }) res: Response, @Req() req: { user: { id: string } }) {
    const token = this.auth.generateToken(req.user);
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: true
    });
    // eslint-disable-next-line camelcase
    return { access_token: token };
  }

  @Post('logout')
  @HttpCode(200)
  @UseAuth('jwt')
  async signOut(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('access_token');
    return { ok: true };
  }

  @Post('signup')
  async signup(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const user = await this.auth.createUser(email, password);
    return user;
  }

  @Get('status')
  @UseAuth('jwt')
  async status() {
    return { status: 'AUTHED' };
  }

  @Get('user')
  @UseAuth('jwt')
  async getUser(@Req() req: any, @Query('user_id') userId?: string) {
    if (!userId) return req.user;
    return await this.auth.getUserById(userId);
  }
}
