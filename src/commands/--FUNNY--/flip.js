const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("flip")
    .setDescription("Flip a coin and make a decision"),

  async execute(interaction, client) {
    
    const flip = [
        `${interaction.user} Heads`,
        `${interaction.user} Tails`
      
    ];

    let flipcoin = flip[Math.floor(Math.random() * flip.length)];
    await interaction.reply({
      content: `${flipcoin}`,
    });
  },
};
