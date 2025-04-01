function solution(n) {
  var answer = []
  const arr = [...(n + '')]
  for (let i = arr.length - 1; i >= 0; i--) {
      answer.push(Number(arr[i]))
  }
  return answer;
}