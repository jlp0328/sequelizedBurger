CREATE DATABASE sequelizeburger_db;
USE sequelizeburger_db;

CREATE TABLE burger(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(250) NOT NULL,
  devoured BOOLEAN DEFAULT TRUE,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);
