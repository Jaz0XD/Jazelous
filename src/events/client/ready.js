const { ActivityType, GuildMember } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`Ready! ${client.user.tag} is logged in and online.`);
    const memberCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

    client.user.setPresence({
      activities: [
        {
          name: `over ${memberCount} XDians`,
          type: ActivityType.Watching,
        },
      ],
    });
  },
};
