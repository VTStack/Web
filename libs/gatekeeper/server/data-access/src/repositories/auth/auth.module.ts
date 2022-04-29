import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Models } from '../../constants/models';
import { AuthSchema } from '../../schemas/auth.schema';
import { AuthRepository } from './auth.repository';

@Module({
  providers: [AuthRepository],
  exports: [AuthRepository],
  imports: [
    MongooseModule.forFeature([
      { name: Models.AUTH_MODEL, schema: AuthSchema, collection: Models.AUTH_MODEL }
    ])
  ]
})
export class DataAuthModule {}
