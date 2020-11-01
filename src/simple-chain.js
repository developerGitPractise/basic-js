const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    //returns the current chain length as a number;
  },
  addLink(value) {
    //adds a link containing a string representation of the value to the chain;
    //If addLink is called with no arguments, it adds an empty link ('( )') to the chain.
    if(value === undefined){
      return `'( )'`
    }
    return `( ${value} )`
  },
  removeLink(position) {
    //removes a chain link in the specified position;
    //Error - If accepts invalid position (e.g. not a number, or a fractional number, or corresponding to a nonexistent link)
  },
  reverseChain() {
    //reverses the chain;
  },
  finishChain() {
    // ends the chain and returns it.
    // After calling the finishChain method, the existing chain must be deleted.
  }
};

module.exports = chainMaker;

// For example:
// chainMaker.addLink(1).addLink(2).addLink(3).finishChain() => '( 1 )~~( 2 )~~( 3 )'
// chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain() => '( 2 )~~( 3 )'
// chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain() => '( 2 )~~( 1 )~~( 3 )'