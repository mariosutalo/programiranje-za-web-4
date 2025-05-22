use webshop;
drop table if exists testemonials;
create table testemonials(
	id int auto_increment primary key, 
    title varchar(200),
    content varchar(1000),
    author varchar(200)
);

insert into testemonials (title, content, author)
values ("Fast Shipping & Great Quality!", "I was amazed at how quickly my order arrived. The product quality exceeded my expectations, and the packaging was secure and professional. Will definitely shop here again!", "Steve"),
	   ("Customer Service That Cares", "I had a small issue with my order, and the support team resolved it within hours. They were friendly, responsive, and genuinely helpful. It's rare to see such great service these days.", "Lucy"),
       ("My Go-To Online Store", "I've ordered multiple times and have never been disappointed. The site is easy to use, the checkout process is smooth, and I always get what I expect — or better.", "John");
       