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
    .setName("roles")
    .setDescription("Show the list of roles"),
  async execute(interaction, client, self) {
    const embed = new EmbedBuilder()
      .setTitle(`XDF ROLE LIST`)
      .setDescription("XD Franchise Role list")

      .addFields(
        // {
        //   // 👑
        //   name: "<@&1095419464419381390>",
        //   value: "FOUNDER of XDF - <@759985755585773610>",
        //   inline: false,
        // },
        // {
        //   // CEO
        //   name: "<@&1044306028780605460>",
        //   value: "Managing Directors of Dev Team",
        //   inline: false,
        // },
        // {
        //   // DC mod
        //   name: "<@&1092167575477166091>",
        //   value: "XDF Discord moderation team",
        //   inline: false,
        // },
        // {
        //   // VIP
        //   name: "<@&1092167662911635586>",
        //   value: "GameHub Cafélord",
        //   inline: false,
        // },
        // {
        //   // YT mod
        //   name: "<@&1095359583800803388>",
        //   value: "YouTube Channel Moderation Team",
        //   inline: false,
        // },
        // {
        //   // Twitch Mod
        //   name: "<@&1092166835505471598>",
        //   value: "Twtich Channel Moderation Team",
        //   inline: false,
        // },
        // {
        //   // Gamer club
        //   name: "<@&1101175330573668442>",
        //   value: "GameHub Squad",
        //   inline: false,
        // },

        {
          name: "ROLES",
          value:
            "<@&1095419464419381390>\nFOUNDER of XDF - <@759985755585773610>\n\n<@&1044306028780605460>\nManaging Directors of Dev Team\n\n<@&1092167575477166091>\nXDF Discord moderation team\n\n<@&1092167662911635586>\nGameHub Cafélord\n\n<@&1095359583800803388>\nYouTube Channel Moderation Team\n\n<@&1092166835505471598>\nTwtich Channel Moderation Team\n\n<@&1101175330573668442>\nGameHub Squad\n",
        }
      )
      .setColor(0xecfc03)
      .setTimestamp(Date.now())
      .setFooter({
        iconURL: interaction.user.displayAvatarURL(),
        text: interaction.user.tag,
      });
    await interaction.reply({
      embeds: [embed],
    });
  },
};
