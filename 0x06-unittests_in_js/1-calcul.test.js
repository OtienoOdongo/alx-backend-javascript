const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  // Test cases for SUM
  describe('SUM', () => {
    it('should round the numbers and return the sum', () => {
      assert.equal(calculateNumber('SUM', 1.0, 0), 1);
      assert.equal(calculateNumber('SUM', 1.3, 0), 1);
      assert.equal(calculateNumber('SUM', 1.7, 0), 2);
    });
  });

  // Test cases for SUBTRACT
  describe('SUBTRACT', () => {
    it('should round the numbers and return the subtraction result', () => {
      assert.equal(calculateNumber('SUBTRACT', 2.5, 1.2), 1);
      assert.equal(calculateNumber('SUBTRACT', 5.7, 2.8), 3);
      assert.equal(calculateNumber('SUBTRACT', 10.4, 3), 7);
    });
  });

  // Test cases for DIVIDE
  describe('DIVIDE', () => {
    it('should round the numbers and return the division result', () => {
      assert.equal(calculateNumber('DIVIDE', 8, 2), 4);
      assert.equal(calculateNumber('DIVIDE', 10, 3), 3.33);
    });

    it('should return Error when dividing by zero', () => {
      assert.equal(calculateNumber('DIVIDE', 6, 0), 'Error');
    });
  });

