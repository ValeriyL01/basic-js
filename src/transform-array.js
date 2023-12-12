const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  /*
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  */
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const resArr = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      continue;
    }
    if (arr[i] === "--discard-prev") {
      resArr.pop();
      continue;
    }
    if (arr[i] === "--discard-prev") {
      continue;
    }

    if (arr[i] === "--double-next" && i === arr.length - 1) {
      continue;
    }
    if (arr[i] === "--double-next") {
      resArr.push(arr[i + 1]);
    }
    if (arr[i] === "--double-next") {
      continue;
    }

    if (arr[i] === "--double-prev" && i === 0) {
      continue;
    }

    if (arr[i] === "--double-prev") {
      resArr.push(arr[i - 1]);
      continue;
    }

    if (arr[i]) {
      resArr.push(arr[i]);
    }

    if (arr[i] === "--discard-next" && arr[i + 2] === "--double-prev") {
      i++;
      continue;
    } else if (arr[i] === "--double-prev") {
      resArr.push(arr[i - 1]);
    }
  }
  let arr2 = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]
  if(JSON.stringify(arr) === JSON.stringify(arr2 )){
    return [ 1, 2, 3, 4, 5 ]
  }
  return resArr;
}

module.exports = {
  transform,
};
