/*create table transactions(
transaction_id int primary key,
amount decimal(5,2)
);*/

alter table transactions
add constraint
primary key(transaction_id)