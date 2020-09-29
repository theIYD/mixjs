var maxSubArray = function(nums) {
  if (nums.length === 0) return 0;

  let current = nums[0];
  let largest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(current + nums[i], nums[i]);
    largest = Math.max(current, largest);
  }

  return largest;
};
