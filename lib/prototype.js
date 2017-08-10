const constants = require('./constants');
const globalOptions = require('./options');
const lib = require('./time');

String.prototype.toTime = function(unit, options) {
  options = options || globalOptions;
  unit = unit || options.defaultUnit;

  return lib.parseTo.call(lib, this, unit, options);
};
