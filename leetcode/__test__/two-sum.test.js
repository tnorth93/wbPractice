'use strict';

const twoSum = require('../two-sum/two-sum');

describe('#two-sum.js', () => {
  test('return correct', () => {
    let correctAns = twoSum([1, 5, 3, 6, 8], 11);
    expect(correctAns).toEqual([1, 3]);
  });

  test('return undefined if no num passed in for input', () => {
    expect(twoSum()).toEqual(undefined);
  });

  test('return undefined if no target passed in for input', () => {
    expect(twoSum()).toEqual(undefined);
  });
});

