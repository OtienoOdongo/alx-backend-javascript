/**
 * A functon that calculates a sum of two numbers
 * and rounds them off
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

// Exporting the function for use in test module
module.exports = calculateNumber;
