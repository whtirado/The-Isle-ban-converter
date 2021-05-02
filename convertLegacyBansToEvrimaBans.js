const fs = require('fs');
const { EvrimaBan } = require('./classes/EvrimaBan');

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

const writeBansToFile = () => {
  fs.writeFileSync(banOutputFile, JSON.stringify(bans, null, 2), {
    encoding: 'utf-8',
  });

  console.log(`Process completed, files writen to ${banOutputFile}`);
};

const readBanDirectory = () => {
  console.log('Reading ban directory...');

  files = fs.readdirSync(banDirectory);
};

const readEachFile = () => {
  console.log('Reading ban files...');

  files.forEach((file) => {
    if (file) {
      const fileContents = fs.readFileSync(`${banDirectory}/${file}`, 'utf-8');
      getFileData(file, fileContents);
    }
  });

  console.log('Done reading ban files...');
};

readBanDirectory();

readEachFile();

writeBansToFile();
