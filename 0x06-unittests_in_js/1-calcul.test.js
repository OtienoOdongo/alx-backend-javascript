const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM without rounding', () => {
    it('should return 5', () => {
      assert.equal(calculateNumber('SUM', 1, 4), 5);
    });
  });

  describe('SUM with the first number rounded', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber('SUM', 2.4, 4), 6);
    });
  });

  describe('SUM with the second number rounded', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber('SUM', 4, 2.4), 6);
    });
  });

  describe('SUM with both numbers rounded', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT without rounding', () => {
    it('should return 2', () => {
      assert.equal(calculateNumber('SUBTRACT', 5, 3), 2);
    });
  });

  describe('SUBTRACT with the first number rounded', () => {
    it('should return -3', () => {
      assert.equal(calculateNumber('SUBTRACT', 2, 4.5), -3);
    });
  });

  describe('SUBTRACT with the second number rounded', () => {
    it('should return 3', () => {
      assert.equal(calculateNumber('SUBTRACT', 4.5, 2), 3);
    });
  });

  describe('SUBTRACT with both numbers rounded', () => {
    it('should return -4', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE without rounding', () => {
    it('should return 2', () => {
      assert.equal(calculateNumber('DIVIDE', 8, 4), 2);
    });
  });

  describe('DIVIDE with the first number rounded', () => {
    it('should return 5', () => {
      assert.equal(calculateNumber('DIVIDE', 9.5, 2), 5);
    });
  });

  describe('DIVIDE with the second number rounded', () => {
    it('should return 0.2', () => {
      assert.equal(calculateNumber('DIVIDE', 2, 9.5), 0.2);
    });
  });

  describe('DIVIDE with both numbers rounded', () => {
    it('should return 0.2', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });

  describe('DIVIDE with error (division by zero)', () => {
    it('should return Error', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});

