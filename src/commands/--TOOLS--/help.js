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
            "Ban - Bans a user\nKick - Kicks a user\nTimeout - Mutes a user from all channels\nPurge - Clears a set of messages\nWarn - Warn a user\Warnings - Check a user's warning\nClearwarn - remove a user's warning\nlock - Lock a channel\nUnlock - Unlock a channel",
          inline: false,
        },
        {
          name: "Utils",
          value:
            "Help - This command\nAbout - Jazelous in brief\nJaz - Description of JazXD\nRoles- A list of all roles\nWelc - Welcome a user\nAvatar - Get a user's avatar\nWhois - Find who this person is\nChatGPT - Ask the GPT a question\nDict - Get a pocket dictionary\nImage-Generator - Generate an AI image",
          inline: false,
        },
        {
          name: "Fun",
          value:
            "Ping - Pong\nFlip - Flip a coin\nPat - Pat a user\nSlap - Slap a user\nPandas - Panda GIF\nSeals - Seal GIF\nMsg - Anonymous bot message\nDadjokes - Random dadjokes\nPick - A Character randomizer\nMeme - Sends a random Reddit meme\n8ball - Roll the ball with question\nEnlarge - Get a larger size emoji\nHangman - Play the awesome Hangman game",
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
