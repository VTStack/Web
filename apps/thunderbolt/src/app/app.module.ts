import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { GroupsModule } from './groups/groups.module';
import { PrismaModule } from './prisma/prisma.module';
import { MoviesModule } from './movies/movies.module';
import { InviteModule } from './invite/invite.module';
import { MembersModule } from './members/members.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PassportModule,
    AuthModule,
    GroupsModule,
    PrismaModule,
    MoviesModule,
    InviteModule,
    MembersModule
  ],
  providers: [PrismaService]
})
export class AppModule {}
