// One pass hash table
// T = O(N), S = O(N)
var approachOne = function (nums, target) {
  let hashT = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashT[target - nums[i]] !== undefined) {
      return [target - nums[i], nums[i]];
    } else {
      hashT[nums[i]] = true;
    }
  }
};

// Sort then two pointer method
// T = O(NlogN), S = O(1)
var approachTwo = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let current = nums[left] + nums[right];
    if (current === target) return [nums[left], nums[right]];
    else if (current < target) left++;
    else if (current > target) right--;
  }

  return [];
};
