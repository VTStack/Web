import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Models } from '../../constants/models';
import { AuthSchema } from '../../schemas/auth.schema';
import { TicketRepository } from './ticket.repository';

@Module({
  providers: [TicketRepository],
  exports: [TicketRepository],
  imports: [
    MongooseModule.forFeature([
      { name: Models.TICKET_MODEL, schema: AuthSchema, collection: Models.TICKET_MODEL }
    ])
  ]
})
export class DataAuthModule {}
