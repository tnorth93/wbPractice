const twoSum = function(nums, target) {
  let ansMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (ansMap.get(nums[i]) >= 0) {
      return [ansMap.get(nums[i]), i];
    }
    ansMap.set(target - nums[i], i);
  }
};

console.log(twoSum([14, 8, 5, 12, 1, 7], 12));
