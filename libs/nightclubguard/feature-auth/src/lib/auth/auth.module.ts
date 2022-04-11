import { Module } from '@nestjs/common';
import { DataAuthModule, NightclubguardDataAccessModule } from '@v-thomas/nightclubguard/data-access';
import { AuthResolver } from './auth.resolver';

@Module({
  providers: [AuthResolver],
  imports: [NightclubguardDataAccessModule]
})
export class AuthModule {}
