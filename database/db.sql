--CREATE DATABASE movienightdb;

-- using database
--use movienightdb;

--creating a table
CREATE TABLE `customer` (
    `id` INT AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `address` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(15),
     PRIMARY KEY(`id`)
);

-- TO SHOW ALL TABLES
SHOW TABLES;

--TO DESCRIBE THE TABLE
describe customer;

--mysql -u root -p