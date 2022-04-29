import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  guildId!: string;

  @Prop({ default: false })
  enabled!: boolean;

  @Prop({ default: null })
  channelId!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
