import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export const UseAuth = (...args: string[]) => UseGuards(AuthGuard(...args));
