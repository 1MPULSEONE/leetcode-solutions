function numberOfSteps(num: number): number {
  let counter = 0;
  let newNum = num;
  while (newNum > 0) {
    newNum = newNum % 2 === 0 ? newNum / 2 : newNum - 1;
    counter++;
  }
  return counter;
}
