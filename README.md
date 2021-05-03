# The Isle Ban Converter

_Coverts "The Isle" legacy bans to Evrima bans and vice versa_

## Getting ban files

- Go to File Manager option on server
- Ban files are located in _TheIsle/Saved/Databases/Bans_
- Click on the _"Create Zip"_ option
- _Download/Copy ban files from server files (most likely in .zip format)_

## Setting up file structure

- Create the following directory structure in the root directory _"/legacyBans/Bans"_
- Unzip/Extract files into _"/legacyBans/Bans"_
- _"/legacyBans/Bans"_ should only contain all legacy ban (_steamID.json_) files

## Running commands

- Run the following command _"npm run lte"_ (Legacy to Evrima)
- This will create a _"PlayerBans.json"_ file in the root directory

## Uploading file to Evrima

- upload _"PlayerBans.json"_ into _TheIsle/Saved/PlayerData_

## Upcomming features

- Convert Evrima bans to Legacy bans
