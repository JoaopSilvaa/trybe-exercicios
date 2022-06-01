SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
	employees AS Employee
INNER JOIN
	employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID;

SELECT employee.FIRST_NAME, manager.FIRST_NAME 
FROM hr.employees AS employee
INNER JOIN hr.employees AS manager
ON employee.MANAGER_ID = manager.EMPLOYEE_ID
WHERE employee.DEPARTMENT_ID <> manager.DEPARTMENT_ID;

SELECT manager.FIRST_NAME, COUNT(employee.EMPLOYEE_ID) AS qtd_pessoas_lideradas
FROM hr.employees AS manager
INNER JOIN hr.employees AS employee
ON manager.EMPLOYEE_ID = employee.MANAGER_ID
GROUP BY manager.FIRST_NAME;