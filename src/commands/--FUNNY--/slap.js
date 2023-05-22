const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("slap")
    .setDescription("Slap a user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Mention the user you want to slap")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const slapGIF = [
      "https://media.tenor.com/DWI_Vtq_9_cAAAAC/slap-face.gif",
      "https://media.tenor.com/pYXfwOc2JCQAAAAC/despierta-ya.gif",
      "https://media.tenor.com/__oycZBexeAAAAAC/slap.gif",
      "https://media.tenor.com/Q87RFArH9QkAAAAC/slap-cat.gif",
      "https://media.tenor.com/JJwsQb8Y9IAAAAAC/cartoon-reva.gif",
      "https://media.tenor.com/9VbAG7jcf98AAAAC/animated-cat.gif",
      "https://media.tenor.com/yQ79zaWu3L8AAAAC/bombo.gif",
      "https://media.tenor.com/lhvOTFhPkkkAAAAi/cat-animation.gif",
      "https://media.tenor.com/0Gnq05-0SYMAAAAi/cute-mad.gif",
      "https://media.tenor.com/vjPpjQ0nrmQAAAAC/go-to.gif",
      "https://media.tenor.com/_HBENv0Nlg4AAAAC/slapped-sigur-r%C3%B3s.gif",
      "https://media.tenor.com/pyEFfK77Ng0AAAAC/terminalmontage-yoshis-island.gif",
      "https://media.tenor.com/dexHyzzPSz0AAAAC/pokemon-slapping.gif",
      "https://media.tenor.com/3zAcaKpLCMIAAAAC/mha-bnha.gif",
      "https://media.tenor.com/cgq-NkFitrIAAAAC/slap-slap-yoda.gif",
    ];

    let slaps = slapGIF[Math.floor(Math.random() * slapGIF.length)];
    const user = interaction.options.getUser("user");
    const embed = new EmbedBuilder().setImage(`${slaps}`);
    await interaction.reply({
      content: `${interaction.user} Slaps ${user}`,
      embeds: [embed],
    });
  },
};
