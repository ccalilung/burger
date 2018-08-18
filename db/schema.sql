
use burgers_db;
drop table burgers;
create table burgers(
id int auto_increment not null,
burger_name varchar(255) null,
devoured int not null,
primary key (id));
SELECT * FROM burgers_db.burgers;
