import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TicketService } from './ticket.service';
import { CreateTicketInput } from './dto/create-ticket.input';
import { UpdateTicketInput } from './dto/update-ticket.input';

@Resolver('Ticket')
export class TicketResolver {
  constructor(private readonly ticketService: TicketService) {}

  @Mutation('createTicket')
  create(@Args('createTicketInput') createTicketInput: CreateTicketInput) {
    return this.ticketService.create(createTicketInput);
  }

  @Query('ticket')
  findAll() {
    return this.ticketService.findAll();
  }

  @Query('ticket')
  findOne(@Args('id') id: number) {
    return this.ticketService.findOne(id);
  }

  @Mutation('updateTicket')
  update(@Args('updateTicketInput') updateTicketInput: UpdateTicketInput) {
    return this.ticketService.update(updateTicketInput.id);
  }

  @Mutation('removeTicket')
  remove(@Args('id') id: number) {
    return this.ticketService.remove(id);
  }
}
