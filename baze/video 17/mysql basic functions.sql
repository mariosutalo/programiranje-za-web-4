-- count number of row that have count value
select count(amount)
from transactions;

-- use name alias
select count(amount) as count
from transactions;

-- use name alias with two words
select max(amount) as "maximum ammount"
from transactions;

-- calculate average amount from entire table
select avg(amount)
from transactions;

-- concatenate two or more columns
select concat(first_name, " ", last_name) as full_name
from employees;

-- select lowest price from products table
select min(price) as "lowest price"
from products;