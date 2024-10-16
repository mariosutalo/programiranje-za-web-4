create table products (
product_id int,
product_name varchar(25) unique,
price decimal(4,2)
);

-- add unique constraint to existing table
alter table products
add constraint
unique(product_name)
