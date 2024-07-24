function leftRightDifference(nums: number[]): number[] {
  const prefixSum = [nums[0]]
  const suffixSum = []

  suffixSum[nums.length - 1] = nums[nums.length - 1]

  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i]
  }

  for (let i = nums.length - 2; i > -1; i--) {
    suffixSum[i] = suffixSum[i + 1] + nums[i]
  }

  
  const ans = []
  for (let i = 0; i < nums.length; i++) {
      let leftSum = 0;
      let rightSum = 0;
      if (i - 1 >= 0) {
        leftSum = prefixSum[i - 1]
      } 
      if (i + 1 < nums.length) {
        rightSum = suffixSum[i + 1]
      }

    ans.push(Math.abs(leftSum - rightSum))
  }
  return ans
};