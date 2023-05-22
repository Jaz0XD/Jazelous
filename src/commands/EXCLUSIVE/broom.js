const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("broom")
    .setDescription("Hit Jaz with broom"),

  async execute(interaction, client) {
    let user = interaction.user.id;
    //let id = `${user.id}`;

    const broomlines = [
        "You hit <@759985755585773610> with the 🧹",
        "You start chasing <@759985755585773610> with the broom",
        "You slayed <@759985755585773610> with the broom stick",
        "RIP <@759985755585773610> Simmy's broom wins over your shoe"
];

    if (user === "753279381832728696") {
      let brooming = broomlines[Math.floor(Math.random() * broomlines.length)];
      const embed = new EmbedBuilder().setImage(
        `https://media.tenor.com/kMv5AXmrHtMAAAAC/sailor-mars-chase.gif`
      );
      await interaction.reply({
        content: `${brooming}`,
        embeds: [embed],
      });
    } 
    else if (user === "759985755585773610") {
      let brooming = broomlines[Math.floor(Math.random() * broomlines.length)];
      const embed = new EmbedBuilder().setImage(
        `https://media.tenor.com/kMv5AXmrHtMAAAAC/sailor-mars-chase.gif`
      );
      await interaction.reply({
        content: `${brooming}`,
        embeds: [embed],
      });
    }
    else {
      return interaction.reply("Sorry you don't have rights to do that");
    }
  },
};
