import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard as authGuard } from '@nestjs/passport';

@Injectable()
export class AuthGuard extends authGuard('discord') implements CanActivate {
  override async canActivate(context: ExecutionContext): Promise<boolean> {
    const activate = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    return activate;
  }
}
