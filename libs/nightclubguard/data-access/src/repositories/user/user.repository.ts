import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../../schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.tdo';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async createUser(user: CreateUserDto) {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async findUserbyId(id: string): Promise<UserDocument[] | null> {
    return await this.userModel.findOne({ userId: id });
  }

  async removeUser(id: string): Promise<any> {
    return await this.userModel.deleteOne({ userId: id }).exec();
  }
}
