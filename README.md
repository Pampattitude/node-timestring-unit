# Time string conversion library

This library is used for converting time strings, e.g. `1 month`, to an integer value relative to another unit.

## Example

```javascript
const tsUnit = require('timestring-unit');

tsUnit.parseTo('1 hour', 'ms'); // 3600000
tsUnit.parseTo('1 minute', 'ms'); // 60000
tsUnit.parseTo('1min', 'ms'); // 60000
tsUnit.parseTo('1h 1min', 'ms'); // 3660000
```

## API

You can require the module in several ways:

### Default

```javascript
const tsUnit = require('timestring-unit');

tsUnit.parseTo('1 hour'); // 3600000
tsUnit.parseTo('1 hour', 's'); // 3600
tsUnit.parseTo('1h 1min', 'ms'); // 3660000
```

### Prototype

Modifies the `String` prototype. **NOT RECOMMENDED**

```javascript
const tsUnit = require('timestring-unit/prototype');

'1 hour'.toTime(); // 3600000
'1 hour'.toTime('s'); // 3600
'1h 1min'.toTime('ms'); // 3660000
```

### Tag

Using the [custom interpolation feature of ES6](http://es6-features.org/#CustomInterpolation):

```javascript
const tsUnit = require('timestring-unit/tag');

tsUnit `1 hour`; // 3600000
tsUnit `${'s'} 1 hour`; // 3600
tsUnit `1h 1min ${'ms'}`; // 3660000
```

## What for?

This library was created because I was sick of having a mix of millisecond-based and second-based integer values in my configuration files. For example, using [Redis `EXPIRE`](https://redis.io/commands/expire) (which uses seconds) and `setTimeout` in the same project, you get a config file that looks like this:

```javascript
// config.js
module.exports = {
  redis: {
    defaultTtl: 1,
  },
  stuff: {
    sleepTime: 1000,
  },
};
```

Which uses which unit?

Instead, with this library, you can have this:

```javascript
// config.js
const tsUnit = require('timestring-unit/tag');
module.exports = {
  redis: {
    defaultTtl: tsUnit `1s ${'s'}`,
  },
  stuff: {
    sleepTime: tsUnit `1s ${'ms'}`,
  },
};
```

I find this more explicit.

You could also defer the unit conversing when calling the library, keeping only strings in your configuration file:

```javascript
// config.js
module.exports = {
  redis: {
    defaultTtl: '1s',
  },
  stuff: {
    sleepTime: '1s',
  },
};


// redis.js
const tsUnit = require('timestring-unit');
module.exports.setTtl = async (key, ttl) => {
  return await whicheverRedisClient.exec(`EXPIRE ${key} ${tsUnit.parseTo(ttl || config.defaultTtl, 'ms')}`);
};
```

And **BAM!** unit conversion isn't tied to your configuration anymore, only where it's appropriate.

**Note that I don't recommend this method** because it may impact performance. You should rather "compile" your strings beforehand, at least for non-variable ones.
