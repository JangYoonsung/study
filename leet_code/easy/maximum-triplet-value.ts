function maximumTripletValue(nums: number[]): number {
  let answer = 0;
  for(let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          for (let k = j + 1; k < nums.length; k++) {
              answer = Math.max(answer, (nums[i] - nums[j]) * nums[k])
          }
      }
  }

  return answer
};