const lib = require('./time');

module.exports = (string) => {
  return lib.parseTo(...string);
};
