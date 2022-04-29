import { Injectable } from '@nestjs/common';
import { CreateWelcomeInput } from './dto/create-welcome.input';
import { UpdateWelcomeInput } from './dto/update-welcome.input';

@Injectable()
export class WelcomeService {
  create(createWelcomeInput: CreateWelcomeInput) {
    return 'This action adds a new welcome';
  }

  findAll() {
    return `This action returns all welcome`;
  }

  findOne(id: number) {
    return `This action returns a #${id} welcome`;
  }

  update(id: number, updateWelcomeInput: UpdateWelcomeInput) {
    return `This action updates a #${id} welcome`;
  }

  remove(id: number) {
    return `This action removes a #${id} welcome`;
  }
}
