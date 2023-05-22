const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pat")
    .setDescription("Patpat")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Mention the user you want to pat")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const patGIF = [
      "https://media.tenor.com/GU0IIlOZUQ0AAAAC/pat-pat.gif",
      "https://media.tenor.com/x36w4wZx1JcAAAAC/pikachu-sadness.gif",
      "https://media.tenor.com/c7GxCIVEy-gAAAAC/malpat-truepat.gif",
      "https://media.tenor.com/s7lGkoIAieYAAAAC/so-cute-cat.gif",
      "https://media.tenor.com/Dbg-7wAaiJwAAAAC/aharen-aharen-san.gif",
      "https://media.tenor.com/9PAkJvbE6R0AAAAC/pat-cat.gif",
      "https://media.tenor.com/y_ZoZqOIbIgAAAAC/marshie-pat-marshie.gif",
      "https://media.tenor.com/CM1KJZlwnyIAAAAC/sasiler-sasisi.gif",
      "https://media.tenor.com/5MGEjar4AHcAAAAC/seal-hibo.gif",
      "https://media.tenor.com/b9ho-9u8tdwAAAAi/patpat.gif",
      "https://media.tenor.com/-t1rKk9TXAEAAAAi/console-couple.gif",
      "https://media.tenor.com/f5asRSsfl-wAAAAC/good-boy-pat-on-head.gif",
      "https://media.tenor.com/I3xK9L-ZdBwAAAAC/pat-hug.gif",
      "https://media.tenor.com/XxTB7hajVQoAAAAC/peepo-pat-headpats.gif",
      "https://media.tenor.com/l-A8t80TGqQAAAAd/headpats-headpat.gif",
      "https://media.tenor.com/1G8gpLpUsVEAAAAC/ina-head-pat-pat-the-taco.gif",
      "https://media.tenor.com/jm8Qmpx1g70AAAAC/lub-lub-lub-shark.gif",
      "https://media.tenor.com/nX4fodsKrC8AAAAd/pat-comfort.gif",
      "https://media.tenor.com/rf9XFTHs3CwAAAAC/kittycass-peachcat.gif",
    ];

    let patpat = patGIF[Math.floor(Math.random() * patGIF.length)];
    const user = interaction.options.getUser("user");
    const embed = new EmbedBuilder().setImage(`${patpat}`);
    await interaction.reply({
      content: `Pat-Pat ${user}`,
      embeds: [embed],
    });
  },
};
