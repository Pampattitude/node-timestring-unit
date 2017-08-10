/* global describe it */
/* eslint no-undef: "error" */

const expect = require('chai').expect;

const time = require('../index');

describe('format', () => {
  it('should convert "1ms" with unit "ms" to `1`', () => {
    expect(time.parseTo('1ms', 'ms')).to.equal(1);
  });

  it('should convert "1 ms" with unit "ms" to `1`', () => {
    expect(time.parseTo('1 ms', 'ms')).to.equal(1);
  });

  it('should convert "1          ms" with unit "ms" to `1`', () => {
    expect(time.parseTo('1          ms', 'ms')).to.equal(1);
  });

  it('should fail when converting "1MS" with unit "ms" and return `NaN`', () => {
    expect(time.parseTo('1MS', 'ms')).to.be.NaN;
  });
});
