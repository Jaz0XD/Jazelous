const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("seals")
    .setDescription("Sends a seal GIF"),
  async execute(interaction, client) {
    const sealGIF = [
      "https://media.tenor.com/WXP2qCxozv0AAAAd/seal-running-away.gif",
      "https://media.tenor.com/Tuw8DXxoj6oAAAAC/seal-seal-moment.gif",
      "https://media.tenor.com/KRr-5gB7OCwAAAAd/fat-full.gif",
      "https://media.tenor.com/ffSyyLn350IAAAAd/seal-smile.gif",
      "https://media.tenor.com/9flNuoGx5GoAAAAd/seal-seal-kiss.gif",
      "https://media.tenor.com/H-vhXHYTRY0AAAAd/seal-smile.gif",
      "https://media.tenor.com/pZ6O1MY0a9EAAAAd/seal-silly-seal.gif",
      "https://media.tenor.com/XnMLyoBUIgUAAAAd/seal-wiggle.gif",
      "https://media.tenor.com/KQtSQRfi6ykAAAAC/seal.gif",
      "https://media.tenor.com/xDFF5jle1soAAAAd/sup-seal.gif",
      "https://media.tenor.com/oD9HxEGJRlYAAAAC/sealpup-seal.gif",
    ];

    let seals = sealGIF[Math.floor(Math.random() * sealGIF.length)];
    const embed = new EmbedBuilder().setImage(`${seals}`);
    await interaction.reply({
      embeds: [embed],
    });

    // const embed = new EmbedBuilder()
    //   .setTitle("This command has been removed in the name of revenge")
    //   .setColor(0xff0800);
    // await interaction.reply({
    //   embeds: [embed],
    // });
  },
};
