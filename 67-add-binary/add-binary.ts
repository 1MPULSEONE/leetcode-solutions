function addBinary(a: string, b: string): string {
    if (a.length > b.length) {
      b = [a, a = b][0];
    }
    a = `${'0'.repeat(b.length - a.length)}${a}`
    let add = 0
    let ans = ''
    for (let i = b.length - 1; i > -1; i--) {
        let res = +b[i] + +a[i] + add   
        ans = Math.floor((res % 2)).toString() + ans
        add = Math.floor(res / 2)
    } 
      if (add == 1) {
        ans = '1' + ans
      }
      return ans

};
