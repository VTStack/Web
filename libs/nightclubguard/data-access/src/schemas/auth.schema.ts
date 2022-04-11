import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop({ required: true, unique: true })
  guildId: string;

  @Prop({ default: false })
  enabled: Boolean;

  @Prop({ default: null })
  roleId: String;
}
export const AuthSchema = SchemaFactory.createForClass(Auth);
