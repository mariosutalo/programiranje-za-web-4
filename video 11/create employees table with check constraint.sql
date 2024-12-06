create table employees (
employee_id int,
first_name varchar(50),
last_name varchar(50),
hourly_pay decimal(5,2),
hire_date date,
constraint chk_hourly_pay check (hourly_pay >= 10)
)