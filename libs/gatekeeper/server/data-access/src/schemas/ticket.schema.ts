import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TicketDocument = Ticket & Document;

@Schema()
export class Ticket {
  @Prop({ required: true, unique: true })
  guildId!: string;

  @Prop({ default: false })
  enabled!: boolean;

  @Prop({ default: null })
  roleId!: string;
}
export const TicketSchema = SchemaFactory.createForClass(Ticket);
