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
    .setName("help")
    .setDescription("Shows the list of commands"),
  async execute(interaction, client, self) {
    const jazId = `759985755585773610`;
    const jaz = client.users.cache.get(jazId);
    const embed = new EmbedBuilder()
      .setTitle(`COMMANDS`)
      .setDescription("Shows the entire list of commands of Jazelous")

      .addFields(
        {
          name: "Admin",
          value:
            "Ban - Bans a user\nKick - Kicks a user\nTimeout - Mutes a user from all channels",
          inline: false,
        },
        {
          name: "Utils",
          value:
            "Help - This command\nAbout - Jazelous in brief\nJaz - Description of JazXD\nRoles- A list of all roles\nWelc - Welcome a user\nAvatar - Get a user's avatar",
          inline: false,
        },
        {
          name: "Fun",
          value:
            "Ping - Pong\nFlip - Flip a coin\nPat - Pat a user\nSlap - Slap a user\nPandas - Panda GIF **(REMOVED)**\nSeals - Seal GIF **(REMOVED)**\nMsg - Anonymous bot message\nDadjokes - Random dadjokes\nPick - A Character randomizer",
          inline: false,
        },
        {
          name: "Exclusive",
          value:
            "Broom - Chase Jaz with broom\nShoe - Throw shoe on Simmy\nG - Call for G",
          inline: false,
        }
      )

      .setColor(0xfcba03)
      //.setImage(client.user.displayAvatarURL())
      //.setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      //   .setAuthor({
      //     url: `https://jaz0xd.github.io/Portfolio/`,
      //     iconURL: jaz.displayAvatarURL(),
      //     name: jaz.tag,
      //   })
      .setFooter({
        iconURL: interaction.user.displayAvatarURL(),
        text: interaction.user.tag,
      });
    //   .setURL(`https://jaz0xd.github.io/Portfolio/`);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
