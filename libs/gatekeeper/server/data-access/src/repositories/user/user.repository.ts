import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../../schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from './dto';
import { Models } from '../../constants/models';
import { DeleteResult, Document } from 'mongodb';

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

  removeUser(guildId: string): Promise<DeleteResult> {
    return this.userModel.deleteOne({ guildId }).exec();
  }

  updateUser(data: UpdateUserDto): Promise<(User & Document & { _id: string }) | null> {
    const { guildId } = data;
    delete data.guildId;
    return this.userModel
      .findOneAndUpdate((document: { guildId: string }) => document.guildId === guildId, data)
      .exec();
  }
}
