/* eslint no-undef: "off" */

const chai = require('chai');
const dirtyChai = require('dirty-chai');

const expect = chai.expect;
chai.use(dirtyChai);

const t = require('../lib/tag');

describe('tag', () => {
  it('should convert t`1ms` to `1`', () => {
    expect(t`1ms`).to.equal(1);
  });

  it('should convert t`1s 1ms` to `1001`', () => {
    expect(t`1s 1ms`).to.equal(1001);
  });
});
