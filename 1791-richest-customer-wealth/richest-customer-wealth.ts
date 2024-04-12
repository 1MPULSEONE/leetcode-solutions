function maximumWealth(accounts: number[][]): number {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    const sum = accounts[i].reduce((acc, number) => acc + number);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
