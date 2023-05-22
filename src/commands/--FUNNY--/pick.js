const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pick")
    .setDescription("A randomizer for game characters"),

  async execute(interaction, client) {
    await interaction.reply({
      content: `Choose a game which you wanna get randomized`,
      components: [
        new ActionRowBuilder().setComponents(
          //! Valorant
          new ButtonBuilder()
            .setCustomId("Valorant")
            .setLabel("Valorant")
            .setStyle(ButtonStyle.Primary)
            .setEmoji("<:Valorant:1101826574485028945>"),

          //! Apex Legends
          new ButtonBuilder()
            .setCustomId("ApexLegends")
            .setLabel("Apex Legends")
            .setStyle(ButtonStyle.Primary)
            .setEmoji("<:apex_legends:1101826598115758110>"),
          //! Phasmophobia
          new ButtonBuilder()
            .setCustomId("Phasmo")
            .setLabel("Phasmo_Map")
            .setStyle(ButtonStyle.Primary)
            .setEmoji("<:Phasmophobia:1101826677463601202>")
        ),
      ],
    });
  },
};
