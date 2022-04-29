import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../../schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from './dto';
import { Models } from '../../constants/models';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(Models.USER_MODEL)
    private readonly userModel: Model<UserDocument>
  ) {}

  async createUser(user: CreateUserDto) {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async findUserbyId(guildId: string): Promise<UserDocument[] | null> {
    return await this.userModel.findOne({ guildId });
  }

  async removeUser(guildId: string): Promise<any> {
    return await this.userModel.deleteOne({ guildId }).exec();
  }

  async updateUser(data: UpdateUserDto): Promise<any> {
    const { guildId } = data;
    delete data.guildId;
    return await this.userModel.findOneAndUpdate((document: any) => document.guildId === guildId, data);
  }
}
