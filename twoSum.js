// LeetCode #1 — Easy

// Problem
// Given an array of integers nums and an integer target,
//  return indices of the two numbers such that they add up to target.

// Input: nums = [2, 4, 3, 7, 10], target = 9
// Output: [0, 3]

const numbers = [2, 4, 3, 7, 10]; // Try edit me
const target = 9;

function twoSum(nums, tar) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = tar - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return map;
}

// Log to console
console.log(twoSum(numbers, target));
// Output: [0, 3]
