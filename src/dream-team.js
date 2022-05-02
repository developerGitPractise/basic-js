const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
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

module.exports = {
  createDreamTeam
};
