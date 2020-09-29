const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof sampleActivity !== 'string') ||
      (sampleActivity === false) ||       
      (sampleActivity > MODERN_ACTIVITY) || 
      (typeof sampleActivity !== 'number') ||
      (sampleActivity <= 0) || 
      (sampleActivity > 9000)) {
        return false;
  };   
  const k = Math.log10(2)/HALF_LIFE_PERIOD;
  let t = Math.round(Math.log10(MODERN_ACTIVITY/sampleActivity)/k); 
  return t;
};
