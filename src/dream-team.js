const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members !== 'object' || members === null) {  
    return false;
  } else {
    let firstLettersOfNames = [];
    for (let i = 0; i < members.length; i++) {  
      if (typeof(members[i]) === 'string') {
        let person = members[i].trim();
        firstLettersOfNames.push(person[0].toUpperCase());
      } 
    };
    let result = firstLettersOfNames.sort().join('');
    return result;
  };    
};
