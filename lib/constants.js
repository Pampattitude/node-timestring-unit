module.exports = {};

module.exports.factors = {
  'ms':                      1,
  's':                       1e3,
  'm':                      60e3,
  'h':                 60 * 60e3,
  'd':            24 * 60 * 60e3,
  'w':        7 * 24 * 60 * 60e3,
  'mo':      30 * 24 * 60 * 60e3,
  'y':   365.25 * 24 * 60 * 60e3,
};

module.exports.aliases = {
  'milliseconds':       'ms',

  'sec':                's',
  'second':             's',
  'seconds':            's',

  'min':                'm',
  'mins':               'm',
  'minute':             'm',
  'minutes':            'm',

  'hour':               'h',
  'hours':              'h',

  'day':                'd',
  'days':               'd',

  'week':               'w',
  'weeks':              'w',

  'month':              'mo',
  'months':             'mo',

  'year':               'y',
  'years':              'y',
};

module.exports.units = Object.keys(module.exports.aliases);
