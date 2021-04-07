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
function deleteDigit(n) {
  let num = n + '';
  let arr = num.split('');
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] < min) {
      min = arr[i];
    }
  }
  let index = arr.indexOf(min);
  arr.splice(index, 1);
  return +arr.join('');
}

module.exports = deleteDigit;
