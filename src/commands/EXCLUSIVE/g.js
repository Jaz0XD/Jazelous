const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("g").setDescription("Ping a G"),

  async execute(interaction, client) {
    let user = interaction.user.id;

    if (
      interaction.member.roles.cache.has("1092167662911635586") ||
      user === "759985755585773610"
    ) {
      await interaction.reply({
        content: `Ping a VIP for G`,
        components: [
          new ActionRowBuilder().setComponents(
            //! JazXD
            new ButtonBuilder()
              .setCustomId("JazXD")
              .setLabel("JazXD")
              .setStyle(ButtonStyle.Primary)
              .setEmoji("<:JazXD:1092654957553012826>"),

            //! Ved
            new ButtonBuilder()
              .setCustomId("Ved")
              .setLabel("Ved")
              .setStyle(ButtonStyle.Primary)
              .setEmoji("<:sexyvipervalorant:1097563729320759376>"),

            //! Yoda
            new ButtonBuilder()
              .setCustomId("Yoda")
              .setLabel("Yoda")
              .setStyle(ButtonStyle.Primary)
              .setEmoji("🐵"),

            //! ALL VIPs
            new ButtonBuilder()
              .setCustomId("allVIP")
              .setLabel("VIP")
              .setStyle(ButtonStyle.Danger)
              .setEmoji("💀")
          ),
        ],
      });

      let countdown = 20;
      const countdownInterval = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
          clearInterval(countdownInterval);
          return;
        }
        interaction.editReply({
          content: `Ping a VIP for G\nAuto-delete in **${countdown} seconds**`,
        });
      }, 1000);

      setTimeout(() => {
        interaction.deleteReply();
      }, 20 * 1000);
    } else {
      return interaction.reply("Sorry you don't have rights to do that");
    }
  },
};

