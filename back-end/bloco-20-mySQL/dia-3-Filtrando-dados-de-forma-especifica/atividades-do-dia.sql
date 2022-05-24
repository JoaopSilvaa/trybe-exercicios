SELECT * FROM sakila.customer
WHERE active is TRUE
AND store_id = 2
ORDER BY first_name;
