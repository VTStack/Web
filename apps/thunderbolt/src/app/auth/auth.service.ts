import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { threadId } from 'worker_threads';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private readonly db: PrismaService,
    private readonly jwt: JwtService,
    private readonly http: HttpService
  ) {}

  async validateUser(userId: string) {
    const user = await this.db.user.findUnique({
      where: {
        id: userId
      }
    });

    if (!user) throw new UnauthorizedException();
    else return user;
  }

  generateToken = (user: { id: string }) => this.jwt.sign({ sub: user.id }, { secret: 'jwt_secret' });

  async createUser(email: string, password: string) {
    try {
      const userId = uuid();
      const user = await this.db.user.create({
        data: {
          id: userId,
          email,
          avatar: `https://avatars.dicebear.com/api/human/${Buffer.from(userId, 'utf8').toString(
            'base64'
          )}.svg`,
          password
        }
      });

      return user;
    } catch (e) {
      console.log(e);
      throw new BadRequestException({
        statusCode: 400,
        message: 'Bad Request',
        error: 'USER_EXISTS'
      });
    }
  }

  async getUserById(userId: string) {
    const user = await this.db.user.findUnique({
      where: {
        id: userId
      }
    });
    return user;
  }
}
