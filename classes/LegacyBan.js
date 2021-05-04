class LegacyBan {
  constructor(Reason, DateBanned) {
    this.Reason = Reason;
    this.DateBanned = DateBanned;
    this.DateLifted = '0';
  }
}

exports.LegacyBan = LegacyBan;
