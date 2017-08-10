/* global describe it */
/* eslint no-undef: "error" */

const expect = require('chai').expect;

const t = require('../lib/tag');

describe('prototype', () => {
  it('should convert t`1ms` to `1`', () => {
    expect(t`1ms`).to.equal(1);
  });
});
