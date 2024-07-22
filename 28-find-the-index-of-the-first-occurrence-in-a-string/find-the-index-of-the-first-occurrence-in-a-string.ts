function strStr(haystack: string, needle: string): number {
  const arr = haystack.split('')
  for (let i = 0; i < arr.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
        return i
    }
  }  
  return -1;
};