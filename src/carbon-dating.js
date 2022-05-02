const { NotImplementedError } = require('../extensions/index.js');

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if ((sampleActivity === undefined) || (sampleActivity > 9000) || (typeof sampleActivity !== 'string') || (sampleActivity <= 0) || (sampleActivity > MODERN_ACTIVITY) || isNaN(sampleActivity)) {
    return false;
  }
  const k = Math.log10(2)/HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.log10(MODERN_ACTIVITY/sampleActivity)/k); 
  return t;
}


module.exports = {
  dateSample
};