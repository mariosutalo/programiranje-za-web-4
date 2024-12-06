/*create table products(
id int,
name varchar(200),
price decimal(7,2),
expiry_date date);*/

/*insert into products
values (1, "mlijeko zbregov 1l 3.5mm", 1.1, "2024-10-02"),
(2, "banane", 2.0, "2024-12-13"),
(3, "sol", 2, null);*/

/*select *
from products;*/

/*select *
from products
where price < 2;*/

/*select *
from products
where id != 1;*/

/*select name, price
from products;*/

select *
from products
where expiry_date <= "2024-10-03";



