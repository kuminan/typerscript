CREATE DATABASE test_mysql_ts;

CREATE TABLE Employee(
    id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    firstName VARCHAR(30) NOT NULL ,
    lastName VARCHAR(30) NOT NULL,
    department VARCHAR(40)
);

DESCRIBE Employee;