-- Create and use our database
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

-- Create departments, roles, and employees tables
CREATE TABLE departments (
    -- name
);

CREATE TABLE roles (
    -- title, salary, department_id
);

CREATE TABLE employees (
    -- first_name, last_name, role_id, manager_id
);