const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("shoe")
    .setDescription("Throw Shoe on Simmy"),

  async execute(interaction, client) {
    let user = interaction.user.id;
    //let id = `${user.id}`;

    if (user === "759985755585773610") {
      await interaction.reply({
        content: `Jaz threw 👟 on <@753279381832728696>`,
      });
    } else if (user === "753279381832728696") {
      await interaction.reply({
        content: `Simmy threw 👠 on <@759985755585773610>`,

      });
    } else {
      return interaction.reply("Sorry you don't have rights to do that");
    }
  },
};
