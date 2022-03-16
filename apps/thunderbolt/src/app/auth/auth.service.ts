import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly db: PrismaService, private readonly jwt: JwtService) {}

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
      const user = await this.db.user.create({
        data: {
          email,
          password
        }
      });
      return user;
    } catch (e) {
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
