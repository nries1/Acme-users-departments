DROP TABLE IF EXISTS departments
DROP TABLE IF EXISTS users

CREATE TABLE IF NOT EXISTS departments (
    id SERIAL PRIMARY KEY
    department_name TEXT NOT NULL
)

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    department_id SERIAL NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
)