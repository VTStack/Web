import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketResolver } from './ticket.resolver';

@Module({
  providers: [TicketResolver, TicketService]
})
export class TicketModule {}
