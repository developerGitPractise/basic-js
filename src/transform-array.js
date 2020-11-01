const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error('Error');
    return false;
  } else {
    let initialArr = arr;
    let finalArr = [];
    let discardNext = false; 
    let doubleNext = false;
    for (let i = 0; i < initialArr.length; i++){
      if(Array.isArray(arr[i])){ // если элемент сам массив
        transform(arr[i]);
      }
      if(discardNext === true){ //
        discardNext = false;
        continue; //прервать 1 цикл
      }
      if (typeof(arr[i]) === 'number') { // если элемент число просто добавляю его
        finalArr.push(arr[i]);
        if(doubleNext === true) {
          finalArr.push(arr[i]);
          doubleNext = false;
        }
      } else if (arr[i] === '--double-prev') {  // дублирую прошлое
        finalArr.push(arr[i - 1]);
      } else if (arr[i] === '--discard-prev') { // удаляю прошлое        
        finalArr.pop();                
      } else if(arr[i] === '--discard-next'){
        discardNext = true;
      } else if (arr[i] === '--double-next'){
        doubleNext = true;
      }      
    };
    let result = finalArr; 
    return result; 
  };
};


