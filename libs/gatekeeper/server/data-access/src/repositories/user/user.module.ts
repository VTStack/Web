import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Models } from '../../constants/models';
import { UserSchema } from '../../schemas/user.schema';

import { UserRepository } from './user.repository';

@Module({
  providers: [UserRepository],
  exports: [UserRepository],
  imports: [MongooseModule.forFeature([{ name: Models.USER_MODEL, schema: UserSchema }])]
})
export class UserModule {}
