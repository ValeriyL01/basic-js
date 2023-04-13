const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
 /* throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  */
  if( typeof sampleActivity !== 'string' ){
    return false
   }
  let num = +sampleActivity
  
if(isNaN(num) || num<=0 ){
 return  false
}
let k = 0.693/HALF_LIFE_PERIOD

let res = (Math.log((MODERN_ACTIVITY/num)))/k


if(res <= 0){
  return false
}
if(isNaN(res)  ) {
  return  false
 }
return Math.ceil(res)



}

module.exports = {
  dateSample
};
