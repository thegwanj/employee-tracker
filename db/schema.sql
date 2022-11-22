-- Create and use our database
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

-- Create departments, roles, and employees tables
CREATE TABLE departments (
    -- name
    id INT AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE roles (
    -- title, salary, department_id
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    -- first_name, last_name, role_id, manager_id
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(role_id)
    REFERENCES roles(id),
    FOREIGN KEY(manager_id)
    REFERENCES employees(id)
);