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
  const arr = []
  const arr1 = []
  if(Array.isArray(members)){

    members.forEach((value)=>{
      if( typeof value === 'string'){
        arr.push(value.replace(/\s/g,''))
        
      }
   
    })
    
    
    arr.forEach((value)=>{
      if( typeof value === 'string'){
      
        arr1.push(value[0].toUpperCase())
      }
   
    })


  }else return false
  return arr1.sort().join('')
}

module.exports = {
  createDreamTeam
};
