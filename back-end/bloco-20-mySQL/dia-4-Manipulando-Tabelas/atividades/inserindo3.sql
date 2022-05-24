INSERT INTO actor(first_name, last_name)
SELECT customer.first_name, customer.last_name
FROM customer
LIMIT 5;