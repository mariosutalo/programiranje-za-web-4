select transaction_id, amount, first_name,customers.last_name
from transactions inner join customers
on transactions.customer_id = customers.customer_id;