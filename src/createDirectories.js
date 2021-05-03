const { existsSync, mkdirSync } = require('fs');
const { Message } = require('../classes/Mesasge');

const legacyBansDirectory = './legacyBans';
const evrimaBansDirectory = './EvrimaBans';

const makeDirectories = () => {
  // Create legacy ban directory
  try {
    if (!existsSync(legacyBansDirectory)) {
      mkdirSync(legacyBansDirectory);
      Message.success(`Successfully created: ${legacyBansDirectory}`);
    } else {
      Message.success(`Directory exists: ${legacyBansDirectory}`);
    }
  } catch (err) {
    Message.error(`Failed to created: ${legacyBansDirectory}`);
  }

  // Create evrima ban directory
  try {
    if (!existsSync(evrimaBansDirectory)) {
      mkdirSync(evrimaBansDirectory);
      Message.success(`Successfully created: ${evrimaBansDirectory}`);
    } else {
      Message.success(`Directory exists: ${evrimaBansDirectory}`);
    }
  } catch (err) {
    Message.error(`Failed to created: ${evrimaBansDirectory}`);
  }
};

const runScript = () => {
  Message.header('Checking Ban Directories');
  makeDirectories();
  Message.divider();
};

runScript();
