-- Create seeds for the departments table
INSERT INTO departments(name)
VALUES  ("Meat"),
        ("Seafood"),
        ("Produce"),
        ("Front End");

-- Create seeds for the roles table
INSERT INTO roles(title, salary, department_id)
VALUES  ("Meat Manager", 3000, 1),
        ("Meat Clerk", 2000, 1),
        ("Seafood Manager", 3000, 2),
        ("Seafood Clerk", 2000, 2),
        ("Produce Manager", 3000, 3),
        ("Produce Stocker", 1500, 3),
        ("Shift Lead", 2500, 4),
        ("Cashier", 1200, 4),
        ("Customer Service", 1500, 4);

-- Create seeds for the employees table
INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe", 1, NULL),
        ("Jane", "Doe", 2, 1),
        ("Billy", "B", 3, NULL),
        ("Bob", "B", 4, 3),
        ("Joe", "J", 5, NULL),
        ("Mike", "Chan", 6, 5),
        ("Ashley", "Rodriguez", 7, NULL),
        ("Kevin", "Tupik", 8, 7),
        ("Kunal", "Singh", 9, 7);