select *
from transactions left join customers
on transactions.customer_id = customers.customer_id;