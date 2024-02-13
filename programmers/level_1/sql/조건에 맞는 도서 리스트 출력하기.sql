-- https://school.programmers.co.kr/learn/courses/30/lessons/144853
SELECT
    `BOOK_ID`, date_format(`PUBLISHED_DATE`, '%Y-%m-%d') as PUBLISHED_DATE
FROM 
    `BOOK`
WHERE `CATEGORY` = '인문' 
  AND `PUBLISHED_DATE` BETWEEN '2021-01-01' AND '2021-12-31' 
ORDER BY `PUBLISHED_DATE` DESC
