const mysql2 = require('mysql2');
const utils = require('util');
const inquirer = require('inquirer');

const db = mysql2.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'company_db'
    }
);

db.query = utils.promisify(db.query);

// const createPost = async () => {
//     const users = await db.query("SELECT * FROM users");
//     console.log(users);
// };

// View all departments
// SELECT * FROM departments

// View all roles
// SELECT * FROM roles

// View all employees
// SELECT * FROM employees

// Create new departments
// Prompt the user for the "name" of the department

    // THEN run the query
    // INSERT INTO departments (name)
    // VALUES (values)

        //THEN ask the user what they want to do next


// Create new roles
// Get the existing departments from the "departments" table
    // THEN prompt the user for the "title", "salary", and "department_id" of the role

        // THEN run the query
        // INSERT INTO roles (title, salary, department_id)
        // VALUES (values)

            //THEN ask the user what they want to do next


// Create new employees
// Get the existing departments from the "departments" table
// Get the existing roles from the "roles" table
    // THEN prompt the user for the "first_name", "last_name", "role_id", and "manager_id" of the employee

        // THEN run the query
        // INSERT INTO employees (first_name, last_name, role_id, manager_id)
        // VALUES (values)

            //THEN ask the user what they want to do next


// Update employee
// UPDATE employees
// SET column1 = value, column2 = value
// WHERE (conditional)