import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from './user.module';
import { UserRepository } from './user.repository';

describe('UserService', () => {
  let service: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRepository],

      imports: [UserModule, MongooseModule.forRoot(process.env['NX_GATEKEEPER_DB'] as string)]
    }).compile();

    service = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
