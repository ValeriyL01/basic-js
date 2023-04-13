const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let arr  = String(n).split('')
  let nums = arr.map(function(str) {  
    return parseInt(str)           
  })
 let maxInd = nums.indexOf(Math.max(...nums))
 let res = arr.filter((_,i) => {
  if((maxInd ) <=0){
    return i !== maxInd + 1
  }else if((maxInd )>=1) {
    return i !== maxInd - 1
  }
  
});

return +res.join('')
}

module.exports = {
  deleteDigit
};
