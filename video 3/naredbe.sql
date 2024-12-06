stvaranje, korištenje, brisanje baze
create database  mydb
use database mydb
drop database mydb

stvaranje nove tablice
create table employees (
employee_id int,
first_name  varchar(50),
last_name varchar(50),
hourly_pay decimal(5,2),
hire_date date
);

prikaz svih polja iz tablice
select * from employees;

preimenovanje tablice
rename table employees to workers;

brisanje tablice
drop table employees

alter table employees
add phone_number varchar(15);

alter table employees
rename column phone_number to email;

alter table employees
modify column email varchar(100);

alter table employees
modify email varchar(100)
after last_name;

alter table employees
modify email varchar(100)
first;

alter table employees
drop column email;