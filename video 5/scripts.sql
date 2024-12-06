-- use mydb;
-- select * from employees;
/*select * from employees;*/

/*select first_name, last_name 
from employees;*/

/*select last_name, first_name
from employees;*/

/*select *
from employees
where employee_id = 1;*/

/*select *
from employees
where first_name = "Eugene";*/

/*select * from employees
where hourly_pay > 25;*/

/*select *
from employees
where hire_date <= "2023-01-03";*/

/*select *
from employees
where employee_id != 1;*/

/*select *
from employees
where hire_date is null;*/

select *
from employees
where hire_date is not null;

