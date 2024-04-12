function canConstruct(ransomNote: string, magazine: string): boolean {
  const sortedNote = ransomNote.split("");
  const sortedMagazine = magazine.split("");
  for (let i = 0; i < ransomNote.length; i++) {
    if (!sortedMagazine.find((elem) => elem === sortedNote[i])) return false
    sortedMagazine.splice(sortedMagazine.indexOf(sortedNote[i]), 1)
  }
  return true
}
