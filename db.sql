DROP DATABASE IF EXISTS greatbayDB;

CREATE DATABASE greatbayDB;

USE greatbayDB;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NOT NULL,
  item VARCHAR(100) NOT NULL,
  bid DECIMAL(10,2) NULL,
  categories VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  userID INT NOT NULL,
  username VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL
);

INSERT INTO items (username, item, bid, categories)
VALUES ("michael", "Macbook Pro",  2500.00, "computers,laptops,apple");
