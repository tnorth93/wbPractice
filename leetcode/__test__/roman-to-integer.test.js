'use strict';

const romanToInteger = require('../roman-to-integer/roman-to-integer');

describe('#roman-to-integer.js', () => {
  test('return correct with subtraction', () => {
    let correctAns = romanToInteger('CMIII');
    expect(correctAns).toEqual(903);
  });

  test('return correct all being equal', () => {
    let correctAns = romanToInteger('III');
    expect(correctAns).toEqual(3);
  });

  test('return correct with all addition', () => {
    let correctAns = romanToInteger()
  });
});
