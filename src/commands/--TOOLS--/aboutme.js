const {
  SlashCommandBuilder,
  EmbedBuilder,
  InteractionCollector,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("about")
    .setDescription("Jazelous in brief"),
  async execute(interaction, client, self) {
    const jazId = `759985755585773610`;
    const jaz = client.users.cache.get(jazId);
    const guildCount = interaction.client.guilds.cache.size;
    const memberCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
    const commandCount = interaction.client.commands.size;
    const embed = new EmbedBuilder()
      .setTitle(`ABOUT ME`)
      .setDescription(`I am Jazelous created and developed by ${jaz}`)

      .addFields(
        {
          name: "Developer",
          value:
            `${jaz}\n 2nd April 2023`,
          inline: true,
        },
        {
          name: "XDF Team",
          value:
            `<@759985755585773610>\n<@978263859481706519>\n<@723504022157262888>`,
          inline: true,
        },
        {
          name: "Users",
          value:
            `${memberCount} Users in XDF`,
          inline: true,
        },
        {
          name: "Guilds",
          value:
            `${guildCount} Active Servers`,
          inline: true,
        },
        {
            name: "Commands",
            value:
              `${commandCount} Active Commands`,
            inline: true,
          },
          {
            name: "Version",
            value:
              `1.1.0`,
            inline: true,
          }
      )
      .setColor(0x8900d9)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setFooter({
        iconURL: interaction.user.displayAvatarURL(),
        text: interaction.user.tag,
      });
    await interaction.reply({
      embeds: [embed],
    });
  },
};
