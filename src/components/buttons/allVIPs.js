let limit = 1;

module.exports = {
  data: {
    name: `allVIP`,
  },

  async execute(interaction, client) {
    if (limit <= 3) {
      await interaction.reply({
        content: `<@&1092167662911635586> g?`,
      });
      limit++;
    } else {
      await interaction.reply({
        content: `Rate limited for 60 seconds`,
      });
    }
  },
};

setTimeout(() => {
  limit = 1;
}, 60 * 1000); // 60 seconds
