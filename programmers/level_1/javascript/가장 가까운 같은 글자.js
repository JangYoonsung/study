// https://school.programmers.co.kr/learn/courses/30/lessons/142086
function solution(s) {
  var answer = [];
  const _s = s.split("");
  const arr = [];
  for (let i = 0; i < _s.length; i++) {
    if (arr.includes(_s[i])) {
      answer.push(i - arr.lastIndexOf(_s[i]));
    } else {
      answer.push(-1);
    }
    arr.push(_s[i]);
  }
  return answer;
}
