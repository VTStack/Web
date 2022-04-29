import { CreateWelcomeInput } from './create-welcome.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateWelcomeInput extends PartialType(CreateWelcomeInput) {
  id!: number;
}
