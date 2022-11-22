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

//db.query = utils.promisify(db.query);

initialPrompt();

// Function that is run when we first run the program
function initialPrompt(){
    inquirer
        .prompt([
            {
                message: "What would you like to do?",
                name: "choice",
                type: "list",
                choices: ['View All Departments', 'Add Department', 'View All Roles', 'Add Role', 'View All Employees', 'Add Employee', 'Update Employee Role']
            }
        ])
        .then((response) => {
            console.log(response.choice);
            switch(response.choice){
                case 'View All Employees':
                    viewEmployees();
                    break;
                case 'Add Employee':
                    createEmployee();
                    break;
                case 'Update Employee Role':
                    updateEmployee();
                    break;
                case 'View All Roles':
                    viewRoles();
                    break;
                case 'Add Role':
                    createRole();
                    break;
                case 'View All Departments':
                    viewDepartments();
                    break;
                case 'Add Department':
                    createDepartment();
                    break;
            }
        });
};

// View all departments
// SELECT * FROM departments
function viewDepartments() {
    db.query(`SELECT * FROM departments`, function (err, results) {
        if(err){
            console.log(err);
        }
        console.table(results);
        initialPrompt();
    });
};

// View all roles
// SELECT * FROM roles
function viewRoles() {
    db.query(`SELECT * FROM roles`, function (err, results) {
        if(err){
            console.log(err);
        }
        console.table(results);
        initialPrompt();
    });
};

// View all employees
// SELECT * FROM employees
function viewEmployees() {
    db.query(`SELECT * FROM employees`, function (err, results) {
        if(err){
            console.log(err);
        }
        console.table(results);
        initialPrompt();
    });
};

// Create new departments
function createDepartment(){
// Prompt the user for the "name" of the department
    //viewDepartments();

    inquirer
        .prompt([
            {
                message: "What is the name of the department?",
                name: "departmentName",
                type: "input"
            }
        ])
        .then((response) => {
            db.query(`INSERT INTO departments(name) VALUES ("${response.departmentName}")`);

            initialPrompt();
        });
};


// Create new roles
function createRole() {
    //viewRoles();

    inquirer
        .prompt([
            {
                message: "What is the title of the role?",
                name: "roleTitle",
                type: "input"
            },
            {
                message: "What is the salary?",
                name: "salary",
                type: "input"
            },
            {
                message: "What department does the role belong to?",
                name: "roleDepartment",
                type: "list",
                choices: ["Meat", "Seafood", "Produce", "Front End"]
            }
        ])
        .then((response) => {
            switch(response.roleDepartment){
                case "Meat":
                    choice = 1;
                    break;
                case "Seafood":
                    choice = 2;
                    break;
                case "Produce":
                    choice = 3;
                    break;
                case "Front End":
                    choice = 4;
                    break;
            };
            db.query(`INSERT INTO roles(title, salary, department_id)
            VALUES ("${response.roleTitle}", ${response.salary}, ${choice})`);

            initialPrompt();
        });
};


// Create new employees
function createEmployee(){
    inquirer
        .prompt([
            {
                message: "What is the FIRST name of the employee?",
                name: "firstName",
                type: "input"
            },
            {
                message: "What is the LAST name of the employee?",
                name: "lastName",
                type: "input"
            },
            {
                message: "What is this employee's role?",
                name: "role",
                type: "list",
                choices: ["Meat Manager", "Meat Clerk", "Seafood Manager", "Seafood Clerk", "Produce Manager", "Produce Stocker", "Shift Lead", "Cashier", "Customer Service"]
            },
            {
                message: "What is the employee's manager?",
                name: "manager",
                type: "list",
                choices: ["John Doe", "Jane Doe", "Billy B", "Bob B", "Joe J", "Mike Chan", "Ashley Rodriguez", "Kevin Tupik", "Kunal Singh"]
            }
        ])
        .then((response) => {
            let role, manager;
            switch(response.role){
                case "Meat Manager":
                    role = 1;
                    break;
                case "Meat Clerk":
                    role = 2;
                    break;
                case "Seafood Manager":
                    role = 3;
                    break;
                case "Seafood Clerk":
                    role = 4;
                    break;
                case "Produce Manager":
                    role = 5;
                    break;
                case "Produce Stocker":
                    role = 6;
                    break;
                case "Shift Lead":
                    role = 7;
                    break;
                case "Cashier":
                    role = 8;
                    break;
                case "Customer Service":
                    role = 9;
                    break;
                };
            switch(response.manager){
                case "John Doe":
                    manager = 1;
                    break;
                case "Jane Doe":
                    manager = 2;
                    break;
                case "Billy B":
                    manager = 3;
                    break;
                case "Bob B":
                    manager = 4;
                    break;
                case "Joe J":
                    manager = 5;
                    break;
                case "Mike Chan":
                    manager = 6;
                    break;
                case "Ashley Rodriguez":
                    manager = 7;
                    break;
                case "Kevin Tupik":
                    manager = 8;
                    break;
                case "Kunal Singh":
                    manager = 9;
                    break;
            };

            db.query(`INSERT INTO roles(first_name, last_name, role_id, manager_id)
            VALUES ("${response.firstName}", "${response.lastName}", ${role}, ${manager})`);

            initialPrompt();
        });
};


// Update employee
function updateEmployee(){
    inquirer
        .prompt([
            {
                message: "Which employee's role would you like to update?",
                name: "employee",
                type: "list",
                choices: ["John Doe", "Jane Doe", "Billy B", "Bob B", "Joe J", "Mike Chan", "Ashley Rodriguez", "Kevin Tupik", "Kunal Singh"]
            },
            {
                message: "What is this employee's role?",
                name: "role",
                type: "list",
                choices: ["Meat Manager", "Meat Clerk", "Seafood Manager", "Seafood Clerk", "Produce Manager", "Produce Stocker", "Shift Lead", "Cashier", "Customer Service"]
            },
        ])
        .then((response) => {
            let role, employee;
            switch(response.role){
                case "Meat Manager":
                    role = 1;
                    break;
                case "Meat Clerk":
                    role = 2;
                    break;
                case "Seafood Manager":
                    role = 3;
                    break;
                case "Seafood Clerk":
                    role = 4;
                    break;
                case "Produce Manager":
                    role = 5;
                    break;
                case "Produce Stocker":
                    role = 6;
                    break;
                case "Shift Lead":
                    role = 7;
                    break;
                case "Cashier":
                    role = 8;
                    break;
                case "Customer Service":
                    role = 9;
                    break;
                };
            switch(response.employee){
                case "John Doe":
                    employee = 1;
                    break;
                case "Jane Doe":
                    employee = 2;
                    break;
                case "Billy B":
                    employee = 3;
                    break;
                case "Bob B":
                    employee = 4;
                    break;
                case "Joe J":
                    employee = 5;
                    break;
                case "Mike Chan":
                    employee = 6;
                    break;
                case "Ashley Rodriguez":
                    employee = 7;
                    break;
                case "Kevin Tupik":
                    employee = 8;
                    break;
                case "Kunal Singh":
                    employee = 9;
                    break;
            };
            db.query(`
            UPDATE employees
            SET role_id = ${role}
            WHERE id = ${employee}
            `);
            initialPrompt();
        });
};