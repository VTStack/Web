import { Module } from '@nestjs/common';
import { AuthModule } from './lib/auth/auth.module';

@Module({
  imports: [AuthModule],
  exports: [AuthModule]
})
export class FeatureAuthModule {}
