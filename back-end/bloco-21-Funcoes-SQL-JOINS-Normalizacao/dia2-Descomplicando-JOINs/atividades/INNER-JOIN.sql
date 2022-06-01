SELECT act.actor_id, CONCAT(act.first_name, ' ', act.last_name) AS actor_name,
f.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS f
ON act.actor_id = f.actor_id;

SELECT staf.first_name, staf.last_name,
ad.address
FROM sakila.staff AS staf
INNER JOIN sakila.address AS ad
ON staf.address_id = ad.address_id;

SELECT cust.customer_id, cust.first_name, cust.email, cust.address_id, ad.address
FROM sakila.customer AS cust
INNER JOIN sakila.address AS ad
ON cust.address_id = ad.address_id
ORDER BY first_name DESC
LIMIT 100;

SELECT cust.first_name, cust.email, cust.address_id, ad.address, ad.district
FROM sakila.customer AS cust
INNER JOIN sakila.address AS ad
ON cust.address_id = ad.address_id
WHERE ad.district = 'California'
AND cust.first_name LIKE '%rene';

SELECT cust.first_name, COUNT(ad.address) 
FROM sakila.customer AS cust
INNER JOIN sakila.address AS ad 
ON cust.address_id = ad.address_id
WHERE cust.active = 1
GROUP BY cust.customer_id
ORDER BY cust.first_name DESC;

SELECT s.first_name, s.last_name, AVG(p.amount) AS media
FROM sakila.staff s
INNER JOIN sakila.payment p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.staff_id;

SELECT
    A.actor_id,
    A.first_name,
    F.film_id,
    F.title
FROM
    sakila.actor AS A
INNER JOIN
    sakila.film_actor AS FA ON A.actor_id = FA.actor_id
INNER JOIN
    sakila.film AS F ON F.film_id = FA.film_id;