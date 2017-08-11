const tsUnit = require('./index');
const tsUnitTag = require('./lib/tag');
require('./lib/prototype');

// ## Example
console.log('## Example');

console.log(tsUnit.parseTo('1 hour', 'ms'));
console.log(tsUnit.parseTo('1 minute', 'ms'));
console.log(tsUnit.parseTo('1min', 'ms'));
console.log(tsUnit.parseTo('1h 1min', 'ms'));

// ## API
console.log('## API');

// ### Default
console.log('### Default');

console.log(tsUnit.parseTo('1 hour'));
console.log(tsUnit.parseTo('1 hour', 's'));
console.log(tsUnit.parseTo('1h 1min', 'ms'));

// ### Prototype
console.log('### Prototype');

console.log('1 hour'.toTime());
console.log('1 hour'.toTime('s'));
console.log('1h 1min'.toTime('ms'));

// ### Tag
console.log('### Tag');

console.log(tsUnitTag `1 hour`);
console.log(tsUnitTag `${'s'} 1 hour`);
console.log(tsUnitTag `1h 1min ${'ms'}`);
