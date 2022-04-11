import { CreateTicketInput } from './create-ticket.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTicketInput extends PartialType(CreateTicketInput) {
  id: number;
}
