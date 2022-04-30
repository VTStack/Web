import { Injectable } from '@nestjs/common';
@Injectable()
export class WelcomeService {
  create() {
    return 'This action adds a new welcome';
  }

  findAll() {
    return `This action returns all welcome`;
  }

  findOne(id: number) {
    return `This action returns a #${id} welcome`;
  }

  update(id: number) {
    return `This action updates a #${id} welcome`;
  }

  remove(id: number) {
    return `This action removes a #${id} welcome`;
  }
}
