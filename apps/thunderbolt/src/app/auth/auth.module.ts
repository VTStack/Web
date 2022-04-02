import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { LocalStrategy } from './guards/strategies/local.strategy';
import { JwtStrategy } from './guards/strategies/jwt.strategy';
import { PrismaModule } from '../prisma/prisma.module';
import { MembersModule } from '../members/members.module';
import { AccessGuard } from './guards/access.guard';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: 'jwt_secret',
      signOptions: { expiresIn: '15m' }
    }),
    PrismaModule,
    MembersModule,
    HttpModule
  ],
  providers: [AuthService, LocalStrategy, AccessGuard, JwtStrategy],
  exports: [JwtModule, AccessGuard, MembersModule, PrismaModule]
})
export class AuthModule {}
