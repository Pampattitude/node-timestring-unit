const constants = require('./constants');
const globalOptions = require('./options');

const toUnit = (unit, options) => {
  options = options || globalOptions;

  if (undefined !== constants.aliases[unit])
    unit = constants.aliases[unit];

  if (undefined === constants.factors[unit]) {
    if (true === options.throwable)
      throw new Error('Unknown time unit "' + unit + '"');
    return '';
  }

  return unit;
};

const strToMs = (dateString, options) => {
  options = options || globalOptions;

  if (true === options.strict) {
    if (false === /^\s*((\d+)\s*(\w+)\s*)+$/.test(dateString)) {
      if (true === options.throwable)
        throw new Error(`Wrong format for time string "${dateString}"`);
      return NaN;
    }
  }

  let regex = /(\d+)\s*(\w+)/g;
  let match;
  let ret = 0;
  do {
    match = regex.exec(dateString);

    if (null === match)
      continue ;
    else if (3 > match.length) {
      if (true === options.throwable)
        throw new Error(`Wrong format for time string "${dateString}" (failing match: ${JSON.stringify(match)})`);
      match = null;
      continue ;
    }

    const value = parseFloat(match[1], 10);
    const unit = toUnit(match[2], options);

    ret += Math.round(value * constants.factors[unit]);
  } while (null !== match);

  return ret;
};

module.exports.parseTo = function(timeString, unit, options) {
  options = options || globalOptions;
  unit = unit || options.defaultUnit;
  unit = toUnit(unit, options);

  const msVal = strToMs(timeString, options);
  if (true === isNaN(msVal))
    return NaN;

  return Math.round(msVal / constants.factors[unit]);
};

module.exports.parse = function(timeString, options) {
  options = options || globalOptions;
  let unit = options.defaultUnit;
  unit = toUnit(unit, options);

  const msVal = strToMs(timeString, options);
  if (true === isNaN(msVal))
    return NaN;

  return Math.round(msVal / constants.factors[unit]);
};

module.exports.makeHumanReadable = function(time) {
  time = Math.round(time);

  let result = null;
  let resultUnit = null;

  constants.units.forEach((unit) => {
    const tempResult = Math.round(time / constants.factors[unit]);

    if (null === result ||
        (time === tempResult * constants.factors[unit] && result.length > ('' + tempResult).length)) {
      result = '' + tempResult;
      resultUnit = unit;
    }
  });

  return result + resultUnit;
};
