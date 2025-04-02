function isPalindrome(x: number): boolean {
  if (x < 0) return false
    
  const j = Number(String(x).split('').reverse().join(''))
  if (j === x) return true
  return false
};