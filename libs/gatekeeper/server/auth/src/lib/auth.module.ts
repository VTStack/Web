import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { DiscordStrategy } from './guards/strategies/discord.strategy';
import { AuthGuard } from './guards/auth.guard';
import { Serializer } from './utils/serializer';

@Module({
  controllers: [AuthController],
  imports: [PassportModule.register({ session: true })],
  providers: [AuthService, DiscordStrategy, AuthGuard, Serializer]
})
export class GatedAuthModule {}
