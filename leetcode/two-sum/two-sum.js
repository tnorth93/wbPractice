'use strict';

const twoSum = module.exports = function(nums, target) {
  if (!nums || !target) {
    return undefined;
  }
  let ansMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (ansMap.get(nums[i]) >= 0) {
      return [ansMap.get(nums[i]), i];
    }
    ansMap.set(target - nums[i], i);
  }
};
