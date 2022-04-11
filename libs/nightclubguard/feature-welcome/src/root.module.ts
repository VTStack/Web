import { Module } from '@nestjs/common';
import { WelcomeModule } from './lib/welcome.module';

@Module({
  exports: [WelcomeModule],
  imports: [WelcomeModule]
})
export class FeatureWelcomeModule {}
