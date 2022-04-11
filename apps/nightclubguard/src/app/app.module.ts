import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { FeatureGuildsModule } from '@v-thomas/nightclubguard/feature-guilds';
import { FeatureAuthModule } from '@v-thomas/nightclubguard/feature-auth';
import { FeatureWelcomeModule } from '@v-thomas/nightclubguard/feature-welcome';
@Module({
  imports: [
    FeatureGuildsModule,
    FeatureAuthModule,
    FeatureWelcomeModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['libs/nightclubguard/**/*.gql'],
      include: [FeatureGuildsModule, FeatureAuthModule, FeatureWelcomeModule]
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
