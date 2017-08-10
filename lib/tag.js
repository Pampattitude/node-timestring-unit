const lib = require('./time');

module.exports = (string) => {
  return lib.parseTo.call(lib, ...string);
};
