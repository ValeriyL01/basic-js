const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
 
  let arr = str.split('')   
  let arrRES =[]              
  let sum = 1                
    for(let i = 0; i < arr.length;i++){
  if(arr[i] === arr[i + 1]){           
  sum++                               
  
  } else if(sum === 1){                              
     arrRES.push( arr[i])       
     sum = 1                           
  }  else{                              
    arrRES.push(sum, arr[i])       
    sum = 1                           
 }                                  
    
    }
   return arrRES.join('')
}

module.exports = {
  encodeLine
};
