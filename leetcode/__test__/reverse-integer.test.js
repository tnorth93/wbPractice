'use strict';

const reverseInteger = require('../reverse-integer/reverse-integer');

describe('#reverse-integer.js', () => {
  test('return 0 if number given is greater than 32-bit signed integer', () => {
    expect(reverseInteger(11111111111111111)).toEqual(0);
  });

  test('return reversed number if valid 32-bit signed integer', () => {
    expect(reverseInteger(123456)).toEqual(654321);
  });

  test('return reversed negative number if valid 32-bit signed integer', () => {
    expect(reverseInteger(-115388)).toEqual(-883511);
  });
});
