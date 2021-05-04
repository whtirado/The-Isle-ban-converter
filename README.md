# The Isle Ban Converter

_Coverts "The Isle" legacy bans to Evrima bans and vice versa_

## Getting Legacy ban files

- Go to File Manager option on server
- Ban files are located in _TheIsle/Saved/Databases/Bans_
- Click on the _"Create Zip"_ option
- _Download/Copy ban files from server files (most likely in .zip format)_

## Getting Evrima ban files

- Go to File Manager option on server
- Ban file are located in _TheIsle/Saved/PlayerData_ (last page)
- Click on the _"Create Zip"_ option
- _Download/Copy ban files from server files (most likely in .zip format)_

## Setting up file structure

- Run command _"npm run mkdir"_
- This will create 2 directories _"./legacyBans"_ & _"./evrimaBans"_
- Unzip/Extract files into _"/legacyBans"_
- _"/legacyBans"_ should only contain all legacy ban (_steamID.json_) files

## Running commands (convert Legacy to Evrima)

- Run the following command _"npm run lte"_ (Legacy to Evrima)
- This will create a _"PlayerBans.json"_ file in _"./evrimaBans"_

## Running commands (convert Evrima to Legacy)

- Run the following command _"npm run etl"_ (Evrima to Legacy)
- This will create ban files in _"legacyBans"_

## Uploading file to Legacy

- upload files in _"legacyBans"_ from into server folder _TheIsle/Saved/Databases/Bans_
- _Quick Tip_: You should zip folder legacyBans to make a single upload

## Uploading file to Evrima

- upload _"PlayerBans.json"_ from _"./evrimaBans"_ into server folder _TheIsle/Saved/PlayerData_

## Upcomming features

- Convert Evrima bans to Legacy bans
