class Message {
  static log(text) {
    console.log(text);
  }

  static header(text) {
    console.log('');
    console.warn('\x1b[36m', text, '\x1b[0m');
    console.log('');
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

  static divider() {
    console.log('---------------------------------------------------');
  }
}

exports.Message = Message;
