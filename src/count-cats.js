const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let catAmount = 0;
  for (let i = 0; i < backyard.length; i++) {
    let point = backyard[i];
    if (point === '^^') {
      catAmount++;
    };
    for (let z = 0; z < point.length; z++) {
      let catDetecter = point[z];
      if (catDetecter === '^^') {
        catAmount++;
      };
    };     
  }; 
  if (typeof catAmount !== 'number') {
    throw new Error('not a number');
  };
  return catAmount;
}

module.exports = {
  countCats
};
