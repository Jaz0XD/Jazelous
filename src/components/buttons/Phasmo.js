module.exports = {
  data: {
    name: `Phasmo`,
  },
  async execute(interaction, client) {
    const MapList = [
      "TANGLEWOOD DRIVE",
      "RIDGEVIEW COURT",
      "WILLOW STREET",
      "EDGEFIELD ROAD",
      "BLEASDALE FARMHOUSE",
      "CAMP WOODWIND",
      "GRAFTON FARMHOUSE",
      "SUNNY MEADOWS (RESTRICTED)",
      "BROWNSTONE HIGH SCHOOL",
      "MAPLE LODGE CAMPSITE",
      "PRISON",
      "SUNNY MEADOWS",
    ];

    let Map = MapList[Math.floor(Math.random() * MapList.length)];
    await interaction.reply({
      content: `${Map}`,
    });
  },
};
