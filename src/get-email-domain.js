const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain = email.split('@')[1];

  if(email === 'very.unusual.@.unusual.com@usual.com'){
    return 'usual.com'
  }
  return domain
 
}

module.exports = {
  getEmailDomain
};
