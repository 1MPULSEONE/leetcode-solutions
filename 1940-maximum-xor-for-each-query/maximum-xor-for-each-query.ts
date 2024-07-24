function getMaximumXor(nums: number[], maximumBit: number): number[] {
    const n = nums.length
    const prefixXor = Array(nums.length + 1).fill(0)
    prefixXor[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
      prefixXor[i] = (prefixXor[i - 1] ^ nums[i])
    }
    const ans = Array(n).fill(0)
    let maxNumber = (2 ** maximumBit) - 1
    for (let i = 0; i < nums.length; i++) {
      ans[i] = (prefixXor[n - i - 1] ^ maxNumber)
    }

    return ans
};