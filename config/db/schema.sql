CREATE DATABASE taskBadger;

USE taskbadger;



CREATE TABLE users(
`id` INT(144) AUTO_INCREMENT PRIMARY KEY,
`first_name` VARCHAR(50) not null,
`last_name` VARCHAR(50) not null,
`password` VARCHAR(50) not null,
`email` VARCHAR(50) not null,
`phone_number` INTEGER(10) not null,
date TIMESTAMP);

CREATE TABLE tasks(
`fid` INT(144) AUTO_INCREMENT PRIMARY KEY,
`task` VARCHAR(50) not null,
`deadline` VARCHAR(50) not null,
`hourly` BOOLEAN default false,
`daily` BOOLEAN default false,
`weekly` BOOLEAN default false,
date TIMESTAMP);