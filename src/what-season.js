const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  } else if (!(date instanceof Date)){
    throw new CustomError('Error');
  } else if (date.constructor === Date){
    let seasonsArr = ['winter', 'spring', 'summer', 'autumn'];
    let monthOfDate = Math.floor((date.getMonth() + 1) % 12 / 3);
    console.log(seasonsArr, monthOfDate)
    return seasonsArr[monthOfDate];
  }; 
};

// const springDate = new Date(2019, 12, 22)
// getSeason(springDate)
// getSeason(new Date (2020, 9, 31))
// proper value