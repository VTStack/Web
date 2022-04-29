import { Module } from '@nestjs/common';
import { TicketModule } from './lib/ticket.module';

@Module({
  controllers: [],
  providers: [],
  exports: [TicketModule],
  imports: [TicketModule]
})
export class FeatureTicketModule {}
