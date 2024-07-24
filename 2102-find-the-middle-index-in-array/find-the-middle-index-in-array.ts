function findMiddleIndex(nums: number[]): number {
  const n = nums.length
  const prefixSum = Array(n).fill(0)
  const suffixSum = Array(n).fill(0)
  prefixSum[0] = nums[0]
  suffixSum[n - 1] = nums[n - 1]

  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i]
  }

  for (let i = n - 2; i > - 1; i--) {
    suffixSum[i] = suffixSum[i + 1] + nums[i]
  }

  for (let i = 0; i < nums.length; i++) {
    if (prefixSum[i] === suffixSum[i]) {
      return i
    }
  }

  return -1
};
