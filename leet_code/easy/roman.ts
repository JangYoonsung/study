function romanToInt(s: string): number {
  const map = new Map<string, number>([
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000]
  ])
  const _s = s.split('')
  let answer = 0

  for (let i = 0; i < _s.length; i++) {
      const curr = map.get(_s[i]) as number 
      const prev = map.get(_s[i - 1]) as number

      if (i > 0 && curr > prev) {
          answer += curr - 2 * prev 
      } else {
          answer += curr
      }
  }
  return answer
};