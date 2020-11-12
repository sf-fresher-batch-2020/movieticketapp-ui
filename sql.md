 /* ..Create Database .. */ 
 
create database moviebooking_db;
use moviebooking_db;

 /* ..login .. */ 
 
 drop table user;
create table user(
id int primary key auto_increment,
user_id int not null,
name varchar(50) not null,
email varchar(50) not null,
password varchar(50) not null,
dob date,
gender char(1),
role varchar(10) not null,
active boolean not null default 1,
created_date timestamp not null default current_timestamp,
modified_date timestamp not null default current_timestamp on update current_timestamp,
unique(email,user_id),
check ( gender in ('M','F')),
check (role in ('USER','ADMIN'))
);

 /* .. Load Sample Data .. */ 
 
insert into user (user_id,name,email,password,dob,gender,role) values ( 1,'celshia','celshia@gmail.com', 'pass123','1998-10-31','M','ADMIN');

/* .. List All Users .. */ 

select * from user;



/* .. movie booking .. */ 

drop table movies;
create table movies 
( 
id int primary key auto_increment,
movie_id int not null,
city varchar(50) not null,
theater varchar(50) not null,
movie_name varchar(50) not null,
active boolean not null default 1,
created_date timestamp not null default current_timestamp,
modified_date timestamp not null default current_timestamp on update current_timestamp,
image varchar(250) not null
);

/* .. List All movies .. */ 

select * from movies;

/* .. Load Sample Data .. */ 
 
insert into movies (movie_id,city,theater,movie_name,image) values ( '1', 'chennai', 'inox', 'iruttu', 'aaa.jpg');

insert into movies (movie_id,city,theater,movie_name,image) values ( '2', 'madurai', 'inox', 'iruttu', 'aaa.jpg');

insert into movies (movie_id,city,theater,movie_name,image) values ( '3', 'coimbatore', 'inox', 'iruttu', 'aaa.jpg');

/* .. delete a movie .. */

delete from movies where id =1;


/* .. booking .. */

drop table booking;
create table booking 
( 
id bigint primary key auto_increment,
movie_id int not null,
name varchar(50) not null,
seat_no varchar(50) not null,
movie_name varchar(50) not null,
image varchar(50) not null,
active boolean not null default 1,
booked_date timestamp not null default current_timestamp,
modified_date timestamp not null default current_timestamp on update current_timestamp,
foreign key(movie_id) references movies(id)
);

/* .. Load Sample Data .. */ 
 
insert into booking (movie_id,name,movie_name,seat_no,image) values ( '1', 'celshia', 'iruttu', 2, 'aaa.jpg');

/* .. view booking .. */ 

select * from booking;

delete from accounts where id =3;
