UPDATE film
SET  rental_rate = 25
WHERE length > 100 
AND (rating = 'G' OR rating = 'PG' OR rating= 'PG-13')
AND replacement_cost > 20;