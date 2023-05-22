let limit = 1;

module.exports = {
    data: {
      name: `Ved`,
    },
    
    async execute(interaction, client) {
      
      if (limit <=3) {
        await interaction.reply({
          content: `<@561251425359757314> g?`,
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