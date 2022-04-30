import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { AppClient } from '../client';

interface CommandI {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?(T: SlashCommandBuilder): any;
  run?(interaction: CommandInteraction, client: AppClient): void | Promise<void>;
}

class CommandI {}

export abstract class Command extends CommandI {
  name: string;
  description?: string;
}
