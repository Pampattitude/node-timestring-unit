/* eslint no-undef: "off" */

const chai = require('chai');
const dirtyChai = require('dirty-chai');

const expect = chai.expect;
chai.use(dirtyChai);

require('../lib/prototype');

describe('prototype', () => {
  it('should convert "1ms" with unit "ms" to `1`', () => {
    expect('1ms'.toTime('ms')).to.equal(1);
  });

  it('should convert "1ms" with default unit to `1`', () => {
    expect('1ms'.toTime()).to.equal(1);
  });

  it('should convert "1s 1ms" with unit "ms" to `1001`', () => {
    expect('1s 1ms'.toTime('ms')).to.equal(1001);
  });
});
