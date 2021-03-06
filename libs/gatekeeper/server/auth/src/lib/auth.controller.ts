import { Controller, Get, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthedGuard } from './guards/authed.guard';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @UseGuards(AuthGuard)
  create() {
    // @Body() createAuthDto: CreateAuthDto
    return this.authService.create();
  }

  @Get('callback')
  @UseGuards(AuthGuard)
  findAll(@Req() req: Request & { user: { id: string } }) {
    return req.user;
  }

  @Get('status')
  @UseGuards(AuthedGuard)
  findOne(@Req() req: Request & { user: { id: string } }) {
    console.log(req.user);
    return 'testig';
  }

  @Patch(':id')
  update(
    @Param('id') id: string
    //  @Body() updateAuthDto: UpdateAuthDto
  ) {
    return this.authService.update(
      +id
      // updateAuthDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
