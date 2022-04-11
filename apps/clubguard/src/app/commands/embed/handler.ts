import { Interaction } from 'discord.js';
import { AppClient } from '../../client';
import { createEmbed } from '../../helpers';
import { Command } from '../../models/command';

export default class implements Command {
  name = 'embed';
  description = 'Creates an embed';
  stringOptions?: { name: string; description: string; required: boolean }[] = [
    {
      name: 'title',
      description: 'The title of the embed',
      required: true
    },
    {
      name: 'description',
      description: 'The description of the embed',
      required: true
    }
  ];

  run = (interaction: Interaction, client: AppClient) => {
    // @ts-ignore
    const title = interaction.options.getString('title');
    // @ts-ignore
    const description = interaction.options.getString('description');
    const embed = createEmbed({
      title,
      description,
      client,
      authorName: interaction.user.username,
      authorIconUrl: interaction.user.displayAvatarURL()
    });
    // @ts-ignore
    interaction.reply({ embeds: [embed] });
  };
}
