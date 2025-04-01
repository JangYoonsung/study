function solution(n)
{
    var answer = 0;
    const arr = [...(n + '')]
    answer = arr.reduce((prev, curr) => prev + Number(curr), 0)

    return answer;
}