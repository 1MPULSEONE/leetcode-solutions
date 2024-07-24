function largestAltitude(gain: number[]): number {

  if (gain.length === 0) return 0

  const suffixSum = [gain[0]]

  let max = gain[0]

  for (let i = 1; i < gain.length; i++) {
    suffixSum[i] = gain[i] + suffixSum[i - 1]
    if (suffixSum[i] > max) {
      max = suffixSum[i]
    }
  }

  if (max < 0) return 0
  return max
};