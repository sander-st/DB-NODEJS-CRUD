-- create database
CREATE DATABASE IF NOT EXISTS DATES_USERS;

USE DATES_USERS;

CREATE TABLE dates_users(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30),
  lastname VARCHAR(30),
  email VARCHAR(25),
  dateOfBirth DATE,
  gender VARCHAR(25),
  notes VARCHAR(100)
);

INSERT INTO dates_users(name, lastname, email, dateOfBirth, gender, notes) VALUES (
  'Alexander Dilthon', 'Romanos Quintilla', 'alexander.rq@gmail.com', '1999-01-25', 'Hombre', 'Soy un aficionado al futbol.'
);
INSERT INTO dates_users(name, lastname, email, dateOfBirth, gender, notes) VALUES (
  'Carlos Thunder', 'Flores Simon', 'carlos.flores24@gmail.com', '2000-01-25', 'Hombre', 'Me gusta los videojuegos.'
);