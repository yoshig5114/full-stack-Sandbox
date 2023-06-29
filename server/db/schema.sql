create database hero_db;
drop database if exists hero_db;
use hero_db;
create table ability(
    id int primary key auto_increment,
    ability_name varchar(255),
    is_cool boolean,
    career_start_date date
);
create table history(
    id int primary key auto_increment,
    is_orphan boolean,
    ability_id int,
    foreign key (ability_id) references ability(id)
);

