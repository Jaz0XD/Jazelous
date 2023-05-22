const {
  EmbedBuilder,
  SlashCommandBuilder,
  TextInputAssertions,
  VoiceChannel,
  GuildEmoji,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("music")
    .setDescription("Complete music system")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("play")
        .setDescription("Play a song")
        .addStringOption((option) =>
          option
            .setName("query")
            .setDescription("Provide the name or url for the song")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("volume")
        .setDescription("Adjust the song volume")
        .addStringOption((option) =>
          option
            .setName("percent")
            .setDescription("10 = 10%")
            .setMinLength(1)
            .setMaxLength(100)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("options")
        .setDescription("select an option")
        .addStringOption((option) =>
          option
            .setName("options")
            .setDescription("Select an option")
            .setRequired(true)
            .addChoices(
              {
                name: "query",
                value: "queue",
              },
              {
                name: "skip",
                value: "skip",
              },
              {
                name: "pause",
                value: "pause",
              },
              {
                name: "resume",
                value: "resume",
              },
              {
                name: "stop",
                value: "stop",
              }
            )
        )
    ),
  async execute(interaction, client) {
    const { options, member, guild, channel } = interaction;
    const subcommand = options.getSubcommand();
    const query = options.getString("query");
    const volume = options.getNumber("percent");
    const option = options.getString("options");
    const voiceChannel = member.voice.channel;

    const embed = new EmbedBuilder();

    if (!voiceChannel) {
      embed
        .setColor("Red")
        .setDescription(
          "You must be in a voice channel to execute music commands"
        );
      return interaction.reply({ embeds: [embed] });
    }

    if (!member.voice.channelId == guild.members.me.voice.channelId) {
      embed
        .setColor("Red")
        .setDescription(
          `You can't use the music player as it is already active in <#${guild.members.me.voice.channelId}>`
        );
      return interaction.reply({ embeds: [embed] });
    }

    try {
      switch (subcommand) {
        case "play":
          client.distube.play(voiceChannel, query, {
            textChannel: channel,
            member: member,
          });
          return interaction.reply({ content: "🎶 Request received" });

        case "volume":
          client.distube.setVolume(voiceChannel, volume);
          return interaction.reply({
            content: `🔊 Volume has been set to ${volume}%`,
          });

        case "settings":
          const queue = await client.distube.getQueue(voiceChannel);

          if (!queue) {
            embed.setColor("Red").setDescription("There is no active queue");
            return interaction.reply({ embed: [embed] });
          }
          switch (option) {
            case "skip":
              await queue.skip(voiceChannel);
              embed
                .setColor("Blue")
                .setDescription("⏩ This song has been skipped");
              return interaction.reply({ embed: [embed] });

            case "stop":
              await queue.stop(voiceChannel);
              embed
                .setColor("Red")
                .setDescription("⏹ This song has been stopped");
              return interaction.reply({ embed: [embed] });

            case "pause":
              await queue.pause(voiceChannel);
              embed
                .setColor("Orange")
                .setDescription("⏸ This song has been paused");
              return interaction.reply({ embed: [embed] });
            case "resume":
              await queue.pause(voiceChannel);
              embed
                .setColor("Green")
                .setDescription("⏯ This song has been resumed");
              return interaction.reply({ embed: [embed] });
            case "queue":
              embed
                .setColor("Purple")
                .setDescription(
                  `${queue.song.map(
                    (song, id) =>
                      `\n**${id + 1}** ${song.name} - \`${
                        song.formattedDuration
                      }\``
                  )}`
                );
              return interaction.reply({ embed: [embed] });

              default:
                return interaction.reply({ content: `The commands are not working`})
          }
      }
    } catch (err) {
      console.log(err);
      embed.setColor("Red").setDescription("⛔ | Something went wrong");
      return interaction.reply({ embed: [embed] });
    }
  },
};

