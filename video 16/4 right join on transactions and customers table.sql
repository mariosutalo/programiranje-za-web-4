select *
from transactions right join customers
on transactions.customer_id = customers.customer_id;