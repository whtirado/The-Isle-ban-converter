# The Isle Ban Converter

_Coverts "The Isle" legacy bans to Evrima bans and vice versa_

## Getting ban files

- Go to File Manager option on server
- Ban files are located in _TheIsle/Saved/Databases/Bans_
- Click on the _"Create Zip"_ option
- _Download/Copy ban files from server files (most likely in .zip format)_

## Setting up file structure

- Run command _"npm run mkdir"_
- This will create 2 directories _"./legacyBans"_ & _"./evrimaBans"_
- Unzip/Extract files into _"/legacyBans"_
- _"/legacyBans"_ should only contain all legacy ban (_steamID.json_) files

## Running commands

- Run the following command _"npm run lte"_ (Legacy to Evrima)
- This will create a _"PlayerBans.json"_ file in _"./evrimaBans"_

## Uploading file to Evrima

- upload _"PlayerBans.json"_ into _TheIsle/Saved/PlayerData_

## Upcomming features

- Convert Evrima bans to Legacy bans
