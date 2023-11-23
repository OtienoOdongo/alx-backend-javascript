// Importing the assert library for writing test assertions
const assert = require('assert');

// Importing the function to be tested i.e.calculateNumber()
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  // Test case: it should round the first parameter and return the sum
  it('should round the first parameter and return the sum', () => {
    // Test when the first parameter is a whole number
    assert.equal(calculateNumber(1, 3), 4);
    // Test when the first parameter is a decimal number
    assert.equal(calculateNumber(1.2, 3), 4);
    // Test when the first parameter is zero
    assert.equal(calculateNumber(0, 3), 3);
  });

  // Test case: it should round the second parameter and return the sum
  it('should round the second parameter and return the sum', () => {
    // Test when the second parameter is a whole number
    assert.equal(calculateNumber(1, 3.7), 5);
    // Test when the second parameter is a decimal number
    assert.equal(calculateNumber(1.5, 3.7), 6);
    // Test when the second parameter is zero
    assert.equal(calculateNumber(1, 0), 1);
  });

  // Test case: it should handle both parameters as whole numbers
  it('should handle both parameters as whole numbers', () => {
    assert.equal(calculateNumber(2, 3), 5);
    assert.equal(calculateNumber(10, 5), 15);
  });

  // Test case: it should handle both parameters as decimal numbers
  it('should handle both parameters as decimal numbers', () => {
    assert.equal(calculateNumber(2.5, 3.8), 7);
    assert.equal(calculateNumber(1.1, 2.9), 4);
  });

  // Test case: it should handle one parameter as zero
  it('should handle one parameter as zero', () => {
    assert.equal(calculateNumber(0, 5), 5);
    assert.equal(calculateNumber(3, 0), 3);
  });

  // Test case: it should handle both parameters as zero
  it('should handle both parameters as zero', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });
});
