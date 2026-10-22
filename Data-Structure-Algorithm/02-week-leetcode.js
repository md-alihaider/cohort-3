let prompt = require("prompt-sync")();

{
  // Contains Duplicate
  // Easy
  // LeetCode 217
  // Problem: Given an integer array nums, return true if any value appears at least twice, and return false if every element is distinct.
  // Examples
  // Input: nums = [1, 2, 3, 1];
  // Output: true;
  // Input: nums = [1, 2, 3, 4];
  // Output: false;
  // brute force
  // const containDuplicate = (nums) => {
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] == nums[j]) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // };
  // const containDuplicate = (nums) => {
  //   const seen = new Set();
  //   for (let i = 0; i < nums.length; i++) {
  //     if (seen.has(nums[i])) {
  //       return true;
  //     } else {
  //       seen.add(nums[i]);
  //     }
  //   }
  //   return false;
  // };
  // const nums = [1, 2, 3, 4];
  // console.log(containDuplicate(nums));
}

{
  // Valid Anagram
  // Easy
  // LeetCode 242
  //   Problem statement
  // Given two strings s and t, return true if t is an anagram of s, and false otherwise.
  // An anagram uses exactly the same characters with the same frequencies, but the order can differ.
  // Examples
  // s = "anagram";
  // t = "nagaram";
  // Output: true
  // s = "rat";
  // t = "car";
  // Output: false
  // Check whether both strings have the same characters with identical frequencies.

  const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    const frequency = new Map();

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      frequency.set(char, (frequency.get(char) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
      const char = t[i];
      if (!frequency.has(char) || frequency.get(char) === 0) {
        return false;
      }
      frequency.set(char, frequency.get(char) - 1);
    }

    return true;
  };

  const s = "rat";
  const t = "tar";
  console.log(isAnagram(s,t))
}
