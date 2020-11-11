 /* ..Create Database .. */ 
 
create database naresh_db;
use naresh_db;

 /* ..login .. */ 
 
create table users(
id int primary key auto_increment,
name varchar(50) not null,
email varchar(50) not null,
password varchar(50) not null,
role varchar(10) not null,
active boolean not null default 1,
created_date timestamp not null default current_timestamp,
modified_date timestamp not null default current_timestamp on update current_timestamp,
unique(email),
check (role in ('USER','ADMIN'))
);

 /* .. Load Sample Data .. */ 
 
insert into users (name,email,password,role) values ( 'Naresh','naresh@gmail.com', 'pass123', 'ADMIN');

insert into users (name,email,password,role) values ( 'Siva','siva@gmail.com', 'pass123', 'USER');

insert into users (name,email,password,role) values ( 'Prabhu','prabhu@gmail.com', 'pass123', 'USER');

/* .. List All Users .. */ 

select * from users;

/* .. register .. */ 

create table register 
( 
id bigint primary key auto_increment,
user_id int not null,
name varchar(50) not null,
email varchar(50) not null,
password varchar(50) not null,
dob varchar(50) not null,
active boolean not null default 0,
created_date timestamp not null default current_timestamp,
modified_date timestamp not null default current_timestamp on update current_timestamp,
unique ( user_id),
foreign key (user_id) references users(id)
);
