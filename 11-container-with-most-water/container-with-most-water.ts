function maxArea(height: number[]): number {

    let result = 0;
    let i = 0
    let j = height.length - 1;
    while (i < j) {
      result = Math.max(Math.min(height[i], height[j]) * (j - i), result)
      if (height[i] < height[j]) {
        i++
      } else {
        j--
      }
    }

    return result
};
