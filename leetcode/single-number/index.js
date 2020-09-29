var singleNumber = function(nums) {
  let obj = {};
  for (let val of nums) {
    obj[val] = obj[val] + 1 || 0;
  }

  for (let key in obj) {
    if (obj[key] === 0) {
      return key;
    }
  }
};
