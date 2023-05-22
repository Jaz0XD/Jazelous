let limit = 1;

module.exports = {
    data: {
      name: `JazXD`,
    },
    
    async execute(interaction, client) {
      
      if (limit <=3) {
        await interaction.reply({
          content: `<@759985755585773610> g?`,
        });
        limit++;
      }
      else {
        await interaction.reply({
          content: `Rate limited for 60 seconds`,
        });
      }
    },
  };
  
  setTimeout(() => {
    limit = 1;
  }, 60 * 1000); // 60 seconds