from datetime import datetime
from dateutil.relativedelta import relativedelta

def solution(today, terms, privacies):
    answer = []
    _today = datetime.strptime(today, '%Y.%m.%d')
    for i in range(len(privacies)):
        privacy = privacies[i]
        [privacyDate, privacyTermType] = privacy.split(' ')
        _privacyDate = datetime.strptime(privacyDate, '%Y.%m.%d')
        for y in range(len(terms)):
            [_termType, month] = terms[y].split(' ')
            if (_termType != privacyTermType):
                continue
            termDate = _privacyDate + relativedelta(months=int(month))
        if (termDate <= _today):
            answer.append(i + 1)
    return answer