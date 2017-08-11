const lib = require('./time');

module.exports = (...args) => {
  if (1 === args.length)
    return lib.parseTo(...args);
  return lib.parseTo(args[0].join(''), ...(args.slice(1)));
};
