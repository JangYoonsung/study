function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (target === nums[i] + nums[j]) {
              return [i, j]
          }
      }
  }

  return []
};