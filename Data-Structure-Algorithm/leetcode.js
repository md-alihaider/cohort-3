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

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement),i];
    }

    map.set(nums[i], i);
  }
}

const nums = [2, 11, 15, 7];
const target = 9;

const answer = twoSum(nums,target)
console.log(answer)
