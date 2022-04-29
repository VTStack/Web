import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { FeatureGuildsModule } from '@v-thomas/gatekeeper/server/feature-guilds';
import { FeatureWelcomeModule } from '@v-thomas/gatekeeper/server/feature-welcome';
import { FeatureUsersModule } from '@v-thomas/gatekeeper/server/feature-users';
import { FeatureAuthModule } from '@v-thomas/gatekeeper/server/feature-auth';
import { Serializer } from '@v-thomas/gatekeeper/server/auth';
@Module({
  imports: [
    FeatureGuildsModule,
    FeatureWelcomeModule,
    FeatureUsersModule,
    FeatureAuthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['libs/gatekeeper/server/**/*.gql'],
      include: [FeatureGuildsModule, FeatureAuthModule, FeatureWelcomeModule, FeatureUsersModule]
    })
  ],
  controllers: [AppController],
  providers: [AppService, Serializer]
})
export class AppModule {}
