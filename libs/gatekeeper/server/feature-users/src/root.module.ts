import { Module } from '@nestjs/common';
import { UsersModule } from './lib/users.module';

@Module({
  controllers: [],
  providers: [],
  exports: [UsersModule],
  imports: [UsersModule]
})
export class FeatureUsersModule {}
