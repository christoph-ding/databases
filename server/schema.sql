-- CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  id int NOT NULL auto_increment,
  username varchar(255),
  PRIMARY KEY (id)
);
  
CREATE TABLE messages (
  id int NOT NULL auto_increment,
  msgText varchar(255),
  userID int,
  PRIMARY KEY (id),
  FOREIGN KEY (userID) REFERENCES users(id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

