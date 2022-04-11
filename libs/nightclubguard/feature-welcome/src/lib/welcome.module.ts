import { Module } from '@nestjs/common';
import { WelcomeService } from './welcome.service';
import { WelcomeResolver } from './welcome.resolver';
import { NightclubguardDataAccessModule, DataWelcomeModule } from '@v-thomas/nightclubguard/data-access';

@Module({
  providers: [WelcomeResolver, WelcomeService],
  imports: [NightclubguardDataAccessModule, DataWelcomeModule]
})
export class WelcomeModule {}
