const fs = require('fs');
const EvrimaBan = require('./classes/EvrimaBan').EvrimaBan;

// ban files from directory
let files = [];

// evrima ban file container
const bans = {
  bannedPlayerData: [],
};

const banDirectory = './legacyBans/Bans';

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
  fs.writeFileSync('./PlayerBans.json', JSON.stringify(bans), {
    encoding: 'utf-8',
  });
};

const readBanDirectory = () => {
  files = fs.readdirSync(banDirectory);
};

const readEachFile = () => {
  files.forEach((file) => {
    if (file) {
      const fileContents = fs.readFileSync(`${banDirectory}/${file}`, 'utf-8');
      getFileData(file, fileContents);
    }
  });
};

readBanDirectory();

readEachFile();

writeBansToFile();
