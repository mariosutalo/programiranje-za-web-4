-- show customers, sort them by last name and limit
-- result to two
select * from customers
order by last_name desc limit 2;

-- show 1 customer starting from 3rd customer
select * from customers
limit 30, 10;