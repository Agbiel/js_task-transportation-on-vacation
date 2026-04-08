/**
 * @param {number} days
 *
 * @return {number}
 */

const COST_PER_DAY = 40;
const DISCOUNT_3_DAYS = 20;
const DISCOUNT_7_DAYS = 50;

function calculateRentalCost(days) {

 const baseCost = days * COST_PER_DAY;

  if (days >= 7) {
    return baseCost - DISCOUNT_7_DAYS;
  }

  if (days >= 3) {
    return baseCost - DISCOUNT_3_DAYS;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
