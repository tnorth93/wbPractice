'use strict';

const romanToInt = module.exports = function(s) {
  let romanNum = new Map();
  romanNum.set('I', 1);
  romanNum.set('V', 5);
  romanNum.set('X', 10);
  romanNum.set('L', 50);
  romanNum.set('C', 100);
  romanNum.set('D', 500);
  romanNum.set('M', 1000);
  let sum = 0;
  for (let n = 0; n < s.length - 1; n++) {
    let tempOne = romanNum.get(s[n]);
    let tempTwo = romanNum.get(s[n + 1]);
    if (tempOne < tempTwo) {
      sum -= tempOne;
    } else {
      sum += tempOne;
    }
  }
  return sum + romanNum.get(s[s.length - 1]);
};
