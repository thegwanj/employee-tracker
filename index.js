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

// const createPost = async () => {
//     const users = await db.query("SELECT * FROM users");
    // const userChoices = users.map(user => ({
    //     name: user.username,
    //     value: user.id
    // }));
//     console.table(usersChoices);

// const answers = inquirer.prompt([
//      {
//      message: "",
//      name: "",
//      type: ""
//      },
// ]);
// };

/*
await db.query(
    "INSERT INTO posts (title, content, author_id) VALUES"
    [answers.title, answers.content, answers.author_id]
);
*/

// View all departments
// SELECT * FROM departments
const viewDepartments = async () => {
    const departments = await db.query("SELECT * FROM departments");
    console.table(departments);

    initialPrompt();
};

// View all roles
// SELECT * FROM roles
const viewRoles = async () => {
    const roles = await db.query("SELECT * FROM roles");
    console.table(roles);

    initialPrompt();
};

// View all employees
// SELECT * FROM employees
const viewEmployees = async () => {
    const employees = await db.query("SELECT * FROM employees");
    console.table(employees);

    initialPrompt();
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
            db.query(`INSERT INTO roles(name)
            VALUES ("${response.roleTitle}", ${response.salary}, ${choice})`);

            initialPrompt();
        });
};


// Create new employees
function createEmployee(){
    inquirer
        .prompt([

        ])
        .then((response) => {
            initialPrompt();
        });
// Get the existing departments from the "departments" table
// Get the existing roles from the "roles" table
    // THEN prompt the user for the "first_name", "last_name", "role_id", and "manager_id" of the employee

        // THEN run the query
        // INSERT INTO employees (first_name, last_name, role_id, manager_id)
        // VALUES (values)

            //THEN ask the user what they want to do next

};


// Update employee
function updateEmployee(){
    inquirer
        .prompt([

        ])
        .then((response) => {
            initialPrompt();
        });
// UPDATE employees
// SET column1 = value, column2 = value
// WHERE (conditional)
};