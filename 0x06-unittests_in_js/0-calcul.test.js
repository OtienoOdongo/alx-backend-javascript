// Importing the assert library for writing test assertions
const assert = require('assert');

// Importing the function to be tested i.e.calculateNumber()
const calculateNumber = require('./0-calcul.js');

// Test suite for the calculateNumber function
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
});
