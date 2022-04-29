import { createEmbed } from './';

export const dispayStatus = ({ welcomeEnabled, authEnabled, interaction }) => {
  const embed = createEmbed({
    interaction,
    title: 'Status | Gatekeeper'
  }).addFields([
    { name: 'Auth', value: `Enabled: ${authEnabled}`, inline: true },
    { name: 'Welcome', value: `Enabled: ${welcomeEnabled}`, inline: true }
  ]);
  interaction.reply({ embeds: [embed] });
};
