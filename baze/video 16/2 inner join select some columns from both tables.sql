select transaction_id, amount, first_name, last_name
from transactions inner join customers
on transactions.customer_id = customers.customer_id;