function numberOfPoints(nums: number[][]): number {
  let n = nums.length;
  let used = Array(101).fill(0)
  for (let i = 0; i < n; i++) {
    let [start, end] = [...nums[i]]
    used[start] += 1
    used[end + 1] -= 1
  }
  const prefixSum = [used[0]]
  let result = 0;
  for (let i = 0; i < used.length - 1; i++) {
    if (i > 0) {
      prefixSum[i] = prefixSum[i - 1] + used[i]
    }
    if (prefixSum[i] > 0) {
      result++
    }
  }

  return result
};