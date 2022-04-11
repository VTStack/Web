import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './repositories/user/user.module';
import { DataAuthModule } from './repositories/auth';
import { DataGuildModule } from './repositories/guild';
import { DataWelcomeModule } from './repositories';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vincentthomas:apassword4u@nightclubguarddb.mxy5r.mongodb.net/NightclubguardDB?retryWrites=true&w=majority'
    ),
    UserModule,
    DataAuthModule,
    DataGuildModule,
    DataWelcomeModule
  ],
  exports: [UserModule, DataAuthModule, DataGuildModule, DataWelcomeModule]
})
export class NightclubguardDataAccessModule {}
