const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let amountOfTurns = Math.pow(2, disksNumber) - 1; // 7  
  let amountOfSeconds = Math.floor(3600 * amountOfTurns / turnsSpeed);
  let obj = {};
  obj.turns = amountOfTurns;
  obj.seconds = amountOfSeconds;
  return obj;
};