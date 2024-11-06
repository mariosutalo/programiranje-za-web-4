alter table transactions
add constraint fk_customer_id
foreign key(customer_id) references customers(customer_id);