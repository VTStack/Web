import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../schemas/user.schema';

import { UserRepository } from './user.repository';

@Module({
  providers: [UserRepository],
  exports: [UserRepository],
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])]
})
export class UserModule {}
