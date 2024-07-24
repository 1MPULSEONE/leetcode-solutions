function isCovered(ranges: number[][], left: number, right: number): boolean {
    const used = Array(52).fill(0)
    for (let i = 0; i < ranges.length; i++) {
      const [start, end] = [...ranges[i]]
      used[start] += 1
      used[end + 1] -= 1 
    }

    for (let i = 1; i < used.length; i++) {
      used[i] += used[i - 1]
    }

    for (let i = left; i < right + 1; i++) {
      if (!used[i]) {
        return false
      }
    }

    return true
};