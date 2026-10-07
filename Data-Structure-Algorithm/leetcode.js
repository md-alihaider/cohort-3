let prompt = require("prompt-sync")();

// // Session 1 — Two Sum
// const nums = [2, 11, 15, 7];
// const target = 9;

// //brute force
// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] + nums[j] === target) {
//       console.log([i, j]);
//     }
//   }
// }

//Optimal Solution

// function twoSum(nums, target) {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement),i];
//     }

//     map.set(nums[i], i);
//   }
// }

// const nums = [2, 11, 15, 7];
// const target = 9;

// const answer = twoSum(nums,target)
// console.log(answer)

// Remove Duplicates from Sorted Array — LeetCode #26.\
//Brute force
// const nums = [1, 1, 2, 2, 3, 3];

// const unique = []

// for (let i = 0; i < nums.length; i++){
//   if (!unique.includes(nums[i])) {
//     unique.push(nums[i])
//   }
// }

// console.log(unique)

const removeDuplicate = (nums) => {
  let k = 1
  for (let i = 1; i < nums.length; i++){
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i]
      k++
    }
  }
  return k
};

const nums = [1, 1, 2, 2, 3, 3];

const result = removeDuplicate(nums);
console.log(result)