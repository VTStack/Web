import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GuildDocument = Guild & Document;

@Schema()
export class Guild {
  @Prop({ required: true, unique: true })
  guildId!: string;
}

export const GuildSchema = SchemaFactory.createForClass(Guild);
