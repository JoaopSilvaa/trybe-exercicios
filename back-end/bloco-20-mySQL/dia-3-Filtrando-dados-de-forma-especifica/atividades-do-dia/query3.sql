SELECT * FROM sakila.film
WHERE rating = 'PG' OR 'PG-13'
ORDER BY replacement_cost DESC
LIMIT 100;