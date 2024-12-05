-- add new column
alter table employees
add column job varchar(25) after hourly_pay;

-- add job to employee
update employees
set job = "manager"
where employee_id = 1;


-- filter employees table, on show rows where hire date is lower than
select *
from employees
where hire_date < "2023-01-5";


-- add two filter conditions using and keyword
-- this will only show rows where both conditions are satisfied
select *
from employees
where hire_date < "2023-01-5" and job = "cook";

-- show rows where jos is cook or waiter
select *
from employees
where job = "cook" or job = "waiter";

-- show all roms where job is not cook
select *
from employees
where not job = "cook";

-- show all rows where job is not cook or waiter
select *
from employees
where not job = "cook" and not job = "waiter";

-- show all rows where hire date is between two dates
select *
from employees
where hire_date between "2022-01-05" and "2024-01-01";

-- show rows where job is in categories
select *
from employees
where job in ("cook", "waiter");