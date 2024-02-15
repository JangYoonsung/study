# https://school.programmers.co.kr/learn/courses/30/lessons/176963
def solution(name, yearning, photo):
    answer = []
    for i in range(len(photo)):
        _sum = 0
        for y in range(len(photo[i])):
            idx = findIndex(name, photo[i][y])
            if (idx == -1): continue
            _sum = _sum + yearning[idx]
        answer.append(_sum)
    return answer

def findIndex(i, y):
    if y in i: return i.index(y)
    else: return -1
    