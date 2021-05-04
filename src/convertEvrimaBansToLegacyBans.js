const { readdirSync, readFileSync, writeFileSync } = require('fs');
const { LegacyBan } = require('../classes/LegacyBan');
const { Message } = require('../classes/Mesasge');

const banDirectory = './evrimaBans';

const banDataFile = 'PlayerBans.json';

const outputDirectory = './legacyBans';

let banData = null;

let createdFiles = 0;

const readBanFile = () => {
  try {
    Message.log(`Reading ban file: (${banDirectory}/${banDataFile})`);

    const fileContents = readFileSync(
      `${banDirectory}/${banDataFile}`,
      'utf-8'
    );

    banData = JSON.parse(fileContents).bannedPlayerData;

    Message.success(`Successfully read ban file: (${banDataFile})`);
  } catch (err) {
    Message.error(`Failed to find file: (${banDirectory}/${banDataFile})`);
  }
};

const readEachBan = () => {
  if (banData && Array.isArray(banData)) {
    Message.log(`Creating ban files: (${outputDirectory})`);

    banData.forEach((ban) => {
      getBanData(ban);
    });

    Message.success(`Done creating ban files: (${outputDirectory})`);
  } else {
    Message.warn(`No ban data found: (${banDirectory}/${banDataFile})`);
  }
};

const getBanData = (ban) => {
  const fileName = `${ban.steamId}.json`;
  const legacyBanData = new LegacyBan(ban.banReason, ban.bannedTime);

  createLegacyBan(fileName, JSON.stringify(legacyBanData, null, 2));
};

const createLegacyBan = (fileName, legacyBanData) => {
  try {
    writeFileSync(`${outputDirectory}/${fileName}`, legacyBanData, {
      encoding: 'utf-8',
    });

    createdFiles += 1;
  } catch (err) {}
};

const runScript = () => {
  Message.header('Running: Legacy to Evrima converter');

  readBanFile();
  readEachBan();

  Message.warn(`Created ${createdFiles} legacy ban file(s)`);
  Message.divider();
};

runScript();
