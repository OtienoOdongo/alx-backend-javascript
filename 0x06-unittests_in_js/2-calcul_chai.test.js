const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM without rounding', () => {
    it('should return 5', () => {
      expect(calculateNumber('SUM', 1, 4)).to.equal(5);
    });
  });

  describe('SUM with the first number rounded', () => {
    it('should return 6', () => {
      expect(calculateNumber('SUM', 2.4, 4)).to.equal(6);
    });
  });

  describe('SUM with the second number rounded', () => {
    it('should return 6', () => {
      expect(calculateNumber('SUM', 4, 2.4)).to.equal(6);
    });
  });

  describe('SUM with both numbers rounded', () => {
    it('should return 6', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT without rounding', () => {
    it('should return 2', () => {
      expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    });
  });

  describe('SUBTRACT with the first number rounded', () => {
    it('should return -3', () => {
      expect(calculateNumber('SUBTRACT', 2, 4.5)).to.equal(-3);
    });
  });

  describe('SUBTRACT with the second number rounded', () => {
    it('should return 3', () => {
      expect(calculateNumber('SUBTRACT', 4.5, 2)).to.equal(3);
    });
  });

  describe('SUBTRACT with both numbers rounded', () => {
    it('should return -4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE without rounding', () => {
    it('should return 2', () => {
      expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
    });
  });

  describe('DIVIDE with the first number rounded', () => {
    it('should return 5', () => {
      expect(calculateNumber('DIVIDE', 9.5, 2)).to.equal(5);
    });
  });

  describe('DIVIDE with the second number rounded', () => {
    it('should return 0.2', () => {
      expect(calculateNumber('DIVIDE', 2, 9.5)).to.equal(0.2);
    });
  });

  describe('DIVIDE with both numbers rounded', () => {
    it('should return 0.2', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });

  describe('DIVIDE with error (division by zero)', () => {
    it('should throw an error', () => {
      expect(() => calculateNumber('DIVIDE', 1.4, 0)).to.equal(Error);
    });
  });
});

