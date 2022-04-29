import { Module } from '@nestjs/common';
import { GatedDataAccessModule } from '@v-thomas/gatekeeper/server/data-access';
import { AuthResolver } from './auth.resolver';

@Module({
  providers: [AuthResolver],
  imports: [GatedDataAccessModule]
})
export class AuthModule {}
