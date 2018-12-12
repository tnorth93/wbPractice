const reverse = module.exports = function(x) {
  if (x <= Math.pow(-2, 31) || x >= (Math.pow(2, 31) - 1)) {
    return 0;
  }
  let negativeFlag = false;
  if (x < 0) {
    negativeFlag = true;
    x *= -1;
  }
  let strNum = x.toString();
  let strNumArr = strNum.split('');
  let reversedStrNumArr = [];
  for (let i = 0; i < strNumArr.length; i++) {
    reversedStrNumArr.unshift(strNumArr[i]);
  }
  let reversedStr = reversedStrNumArr.join('');
  let reversedNum = parseInt(reversedStr);
  if (negativeFlag) {
    reversedNum *= -1;
  }
  if (reversedNum <= Math.pow(-2, 31) || reversedNum >= (Math.pow(2, 31) - 1)) {
    return 0;
  }
  return reversedNum;
};
