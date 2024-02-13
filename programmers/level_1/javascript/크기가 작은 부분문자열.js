// https://school.programmers.co.kr/learn/courses/30/lessons/147355
function solution(t, p) {
  var answer = 0;
  let _t;
  for (let i = 0; i < t.length; i++) {
    _t = t.substring(i);
    const temp = _t.substring(0, p.length);
    if (temp.length < p.length) break;
    if (temp <= p) answer++;
  }
  return answer;
}
