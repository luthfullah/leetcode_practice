// LeetCode #1 — Easy

// Problem
// Given an array of integers nums and an integer target,
//  return indices of the two numbers such that they add up to target.

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
}
