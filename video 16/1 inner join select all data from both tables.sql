select *
from transactions inner join customers
on transactions.customer_id = customers.customer_id;