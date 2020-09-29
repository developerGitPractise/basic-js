const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
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
};

 
