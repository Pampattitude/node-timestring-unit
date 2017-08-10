/* global describe it */
/* eslint no-undef: "error" */

const expect = require('chai').expect;

const time = require('../index');

describe('unit', () => {
  it('should convert "1ms" with unit "ms" to `1`', () => {
    expect(time.parseTo('1ms', 'ms')).to.equal(1);
  });

  it('should convert "10ms" with unit "ms" to `10`', () => {
    expect(time.parseTo('10ms', 'ms')).to.equal(10);
  });

  it('should convert "1000ms" with unit "s" to `1`', () => {
    expect(time.parseTo('1000ms', 's')).to.equal(1);
  });

  it('should convert and round  "1ms" with unit "s" to `0`', () => {
    expect(time.parseTo('1ms', 's')).to.equal(0);
  });
});
