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

  const match = dateString.match(/[ ]*([a-z]+)$/);
  if (null === match || 2 > match.length)
    return NaN;

  const value = parseFloat(dateString, 10);
  const unit = toUnit(match[1], options);

  return Math.round(value * constants.factors[unit]);
};

module.exports.parseTo = function(timeString, unit, options) {
  unit = unit || options.defaultUnit;
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
