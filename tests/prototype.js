/* global describe it */
/* eslint no-undef: "error" */

const expect = require('chai').expect;

const time = require('../lib/prototype');

describe('prototype', () => {
  it('should convert "1ms" with unit "ms" to `1`', () => {
    expect('1ms'.toTime('ms')).to.equal(1);
  });

  it('should convert "1ms" with default unit to `1`', () => {
    expect('1ms'.toTime()).to.equal(1);
  });
});
