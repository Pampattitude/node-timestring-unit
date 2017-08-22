const chai = require('chai');
const dirtyChai = require('dirty-chai');

const expect = chai.expect;
chai.use(dirtyChai);

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

  it('should convert and round "1ms" with unit "s" to `0`', () => {
    expect(time.parseTo('1ms', 's')).to.equal(0);
  });

  it('should convert "1ms" with `parse` to `1`', () => {
    expect(time.parse('1ms')).to.equal(1);
  });
});
