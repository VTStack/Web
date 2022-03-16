import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { LocalStrategy } from './guards/strategies/local.strategy';
import { JwtStrategy } from './guards/strategies/jwt.strategy';
import { PrismaModule } from '../prisma/prisma.module';
import { MembersModule } from '../members/members.module';
import { AccessGuard } from './guards/access.guard';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: 'jwt_secret',
      signOptions: { expiresIn: '15m' }
    }),
    PrismaModule,
    MembersModule
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, AccessGuard, PrismaService],
  exports: [JwtModule, AccessGuard, MembersModule, PrismaService, PrismaModule]
})
export class AuthModule {}
