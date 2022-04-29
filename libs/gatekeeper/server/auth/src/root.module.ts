import { Module } from '@nestjs/common';
import { GatedAuthModule } from './lib/auth.module';

@Module({
  controllers: [],
  providers: [],
  exports: [GatedAuthModule],
  imports: [GatedAuthModule]
})
export class AuthModule {}
