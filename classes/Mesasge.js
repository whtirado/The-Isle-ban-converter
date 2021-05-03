class Message {
  static log(text) {
    console.log(text);
  }

  static success(text) {
    console.warn('\x1b[32m', text, '\x1b[0m');
  }

  static warn(text) {
    console.warn('\x1b[33m', text, '\x1b[0m');
  }

  static error(text) {
    console.error('\x1b[31m', text, '\x1b[0m');
  }
}

exports.Message = Message;
