import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { GatedDataAccessModule } from '@v-thomas/gatekeeper/server/data-access';

@Module({
  providers: [UsersResolver],
  imports: [GatedDataAccessModule]
})
export class UsersModule {}
