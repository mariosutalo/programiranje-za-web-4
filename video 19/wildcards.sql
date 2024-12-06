-- show all employees where first name starts with s
select * from employees
where first_name like "s%";

-- show all employees where hire date start with 2023
select * from employees
where hire_date like "2023%";

-- show all employees where last name ends with r
select * from employees
where last_name like "%r";

-- show all employees where first name starts with sp
select * from employees
where first_name like "sp%";

-- show all employees where job starts ends with aiter,
-- underscore represent any single letter
select * from employees
where job like "_aiter";

-- show all employees where second character in job is "a"
-- folowed by any number of characters
select * from employees
where job like "_a%";