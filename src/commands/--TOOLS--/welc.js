const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("welc")
    .setDescription("Welcomes a member to the server sweetly")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Mention the user you want to welcome")
        .setRequired(true)
      ),
  async execute(interaction, client) {

    const welcGIF = [
      'https://media.tenor.com/j0OAdATURc0AAAAd/welcome.gif',
      'https://media.tenor.com/S6goXLrMgCQAAAAd/welcome-pooh.gif',
      'https://media.tenor.com/K3oEaT2EJqQAAAAd/welcome-clash-royale.gif',
      'https://media.tenor.com/N3i-H1Ki0AYAAAAd/welcome.gif',
      'https://media.tenor.com/nvyXU_nufyEAAAAC/welcome-welcome-to-the-team.gif',
      'https://media.tenor.com/oC8CSq25wx4AAAAC/baby-yoda-welcome.gif'
    ];

    let welc = welcGIF[Math.floor(Math.random() * welcGIF.length)] 
    const user = interaction.options.getUser("user");
    const embed = new EmbedBuilder()
    .setDescription(`We are still building the community`)
    .setImage(`${welc}`)
    await interaction.reply({
      content: `Welcome to XD Franchise ${user}\nHope you have a good time here.`,
      embeds: [embed]
    })
  },
};
