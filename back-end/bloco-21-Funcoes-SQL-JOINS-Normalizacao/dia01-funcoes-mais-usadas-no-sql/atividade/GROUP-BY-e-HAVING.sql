-- GROUP BY
SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;

SELECT AVG(rating), rating
FROM sakila.film
GROUP BY rating
ORDER BY AVG(rating) DESC;

SELECT district, COUNT(*) AS qtd_registros
FROM sakila.address
GROUP BY district
ORDER BY qtd_registros DESC;

-- HAVING
SELECT rating, AVG(length) AS duration_media
FROM sakila.film
GROUP BY rating
HAVING duration_media BETWEEN 115.0 AND 121.50
ORDER BY duration_media DESC;

SELECT rating, SUM(replacement_cost) AS super_replacement
FROM sakila.film
GROUP by rating
HAVING super_replacement > 3950.50
ORDER BY super_replacement;