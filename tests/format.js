const chai = require('chai');
const dirtyChai = require('dirty-chai');

const expect = chai.expect;
chai.use(dirtyChai);

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

  it('should convert "1s 1ms" with unit "ms" to `1001`', () => {
    expect(time.parseTo('1s 1ms', 'ms')).to.equal(1001);
  });

  it('should fail when converting "1MS" with unit "ms" and return `NaN`', () => {
    expect(time.parseTo('1MS', 'ms')).to.be.NaN();
  });

  it('should fail when converting "1ms 1" with unit "ms" and return `NaN`', () => {
    expect(time.parseTo('1ms 1', 'ms')).to.be.NaN();
  });
});
