-- alter table employees
-- add constraint chk_hourly_pay check (hourly_pay >= 10);

alter table employees
drop check chk_hourly_pay;