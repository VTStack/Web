import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Models } from '../../constants/models';
import { WelcomeSchema } from '../../schemas/welcome.schema';
import { WelcomeRepository } from './welcome.repository';

@Module({
  providers: [WelcomeRepository],
  exports: [WelcomeRepository],
  imports: [
    MongooseModule.forFeature([
      { name: Models.WELCOME_MODEL, schema: WelcomeSchema, collection: Models.WELCOME_MODEL }
    ])
  ]
})
export class DataWelcomeModule {}
