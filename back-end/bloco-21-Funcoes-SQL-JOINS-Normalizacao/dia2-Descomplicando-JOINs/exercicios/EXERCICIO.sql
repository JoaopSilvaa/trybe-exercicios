SELECT * FROM Pixar.Movies;
SELECT * FROM BoxOffice;
SELECT * FROM Pixar.Theater;

SELECT m.title, b.domestic_sales, b.international_sales
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice b
ON m.id = b.movie_id;

SELECT m.title,
(b.domestic_sales + b.international_sales) AS numero_de_vendas
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;

SELECT m.title, b.rating
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice b
ON m.id = b.movie_id
ORDER BY b.rating DESC;

SELECT t.*, m.title
FROM Pixar.Theater t
LEFT JOIN Pixar.Movies m
ON t.id = m.theater_id
ORDER BY t.name;

SELECT m.*, t.*
FROM Pixar.Movies m
RIGHT JOIN Pixar.Theater t
ON t.id = m.theater_id
ORDER BY t.name;

SELECT m.*
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice b
ON m.id = b.movie_id
WHERE m.theater_id IS NOT null
AND b.rating > 8;