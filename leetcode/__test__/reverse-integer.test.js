'use strict';

const reverseInteger = require('../reverse-integer/reverse-integer');

describe('#reverse-integer.js', () => {
  test('return 0 if number given is greater than 32-bit signed integer', () => {
    expect(reverseInteger(11111111111111111)).toEqual(0);
  });

  test('return correct all being equal', () => {
    let correctAns = romanToInteger('III');
    expect(correctAns).toEqual(3);
  });

  test('return correct with all addition', () => {
    let correctAns = romanToInteger('CLVI');
    expect(correctAns).toEqual(156);
  });
});
