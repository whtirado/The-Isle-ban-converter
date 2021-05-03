const fs = require('fs');
const { EvrimaBan } = require('./classes/EvrimaBan');
const { Message } = require('./classes/Mesasge');

// ban files from directory
let files = [];

// evrima ban file container
const bans = {
  bannedPlayerData: [],
};

const banDirectory = './legacyBans/Bans';

const banOutputFile = './PlayerBans.json';

const getFileData = (fileName, fileData) => {
  if (fileName && fileData) {
    // get player steam id from file name
    const steamID = fileName.split('.')[0];

    // parse file data to object from string
    let banData = JSON.parse(JSON.stringify(JSON.parse(fileData)));

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
  }
};

const readBanDirectory = () => {
  Message.log(`Reading ban directory: (${banDirectory})`);

  try {
    files = fs.readdirSync(banDirectory);
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
          const fileContents = fs.readFileSync(
            `${banDirectory}/${file}`,
            'utf-8'
          );

          getFileData(file, fileContents);
        } catch (err) {}
      }
    });

    Message.log(`Done reading files: (${banDirectory})`);
  } else {
    Message.warn(`No ban files found in directory: (${banDirectory})`);
  }
};

const writeBansToFile = () => {
  if (bans.bannedPlayerData.length) {
    fs.writeFileSync(banOutputFile, JSON.stringify(bans, null, 2), {
      encoding: 'utf-8',
    });

    Message.success(`Ban file has been created: (${banOutputFile})`);
  } else {
    Message.warn(`File not updated: (${banOutputFile})`);
  }
};

const runScript = () => {
  readBanDirectory();
  readEachFile();
  writeBansToFile();
};

runScript();
