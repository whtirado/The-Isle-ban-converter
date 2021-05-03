const { readdirSync, readFileSync, writeFileSync } = require('fs');
const { EvrimaBan } = require('../classes/EvrimaBan');
const { Message } = require('../classes/Mesasge');

// Testing argvs

// ban files from directory
let files = [];

// evrima ban file container
const bans = {
  bannedPlayerData: [],
};

const banDirectory = `./legacyBans`;

const banOutputFile = './evrimaBans/PlayerBans.json';

const readBanDirectory = () => {
  try {
    Message.log(`Reading ban directory: (${banDirectory})`);

    files = readdirSync(banDirectory);

    Message.success(`Successfully read directory: (${banDirectory})`);
  } catch (err) {
    Message.error(`Directory not found: (${banDirectory})`);
  }
};

const readEachFile = () => {
  if (files.length) {
    Message.log(`Reading ban files: (${banDirectory})`);

    files.forEach((file) => {
      if (file) {
        try {
          const fileContents = readFileSync(`${banDirectory}/${file}`, 'utf-8');
          getFileData(file, fileContents);
        } catch (err) {}
      }
    });

    Message.success(`Successfully read files: (${banDirectory})`);
  } else {
    Message.warn(`No ban files found in directory: (${banDirectory})`);
  }
};

const getFileData = (fileName, fileData) => {
  if (fileName && fileName.endsWith('.json') && fileData) {
    // get player steam id from file name
    const steamID = fileName.split('.')[0];

    // parse file data to object from string
    let banData = JSON.parse(JSON.stringify(JSON.parse(fileData)));

    createEvrimaBan(steamID, banData);
  }
};

const createEvrimaBan = (steamID, banData) => {
  // create new evrima ban entry
  bans.bannedPlayerData.push(
    new EvrimaBan(
      steamID,
      'Legacy Ban',
      banData.Reason,
      banData.DateBanned,
      '0001.01.01-00.00.00',
      'NotGnome',
      'Legacy Ban'
    )
  );
};

const writeBansToFile = () => {
  if (bans.bannedPlayerData.length) {
    try {
      Message.log(`Writing to file: (${banOutputFile})`);

      writeFileSync(banOutputFile, JSON.stringify(bans, null, 2), {
        encoding: 'utf-8',
      });

      Message.success(`Successfully created file: (${banOutputFile})`);
    } catch (err) {
      Message.error(`Failed to write file: (${banOutputFile})`);
    }
  } else {
    Message.warn(`File not updated/created: (${banOutputFile})`);
  }
};

const runScript = () => {
  Message.header('Running: Legacy to Evrima converter');

  readBanDirectory();
  readEachFile();
  writeBansToFile();

  Message.divider();
};

runScript();
