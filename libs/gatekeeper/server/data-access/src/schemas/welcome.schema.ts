import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WelcomeDocument = Welcome & Document;

@Schema()
export class Welcome {
  @Prop({ required: true, unique: true })
  guildId!: string;

  @Prop({ default: false })
  enabled!: boolean;

  @Prop()
  channelId!: string;

  @Prop()
  message!: string;
}
export const WelcomeSchema = SchemaFactory.createForClass(Welcome);
