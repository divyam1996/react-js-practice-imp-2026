function subsets(nums) {
  const result = [];
  helper(0, [], nums, result);
  return result;
}

function helper(start, path, nums, result) {
  result.push([...path]);

  for (let i = start; i < nums.length; i++) {
    path.push(nums[i]);                  // choose
    helper(i + 1, path, nums, result);  // explore
    path.pop();                         // backtrack
  }
}