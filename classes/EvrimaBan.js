class EvrimaBan {
  constructor(
    steamId,
    playerName,
    banReason,
    bannedTime,
    endBanTime,
    bannerName,
    bannerSteamId
  ) {
    this.steamId = steamId;
    this.playerName = playerName;
    this.banReason = banReason;
    this.bannedTime = bannedTime;
    this.endBanTime = endBanTime;
    this.bannerName = bannerName;
    this.bannerSteamId = bannerSteamId;
  }
}

module.exports = {
  EvrimaBan,
};
