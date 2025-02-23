CREATE DATABASE IF NOT EXISTS react_todo;
USE react_todo;

CREATE TABLE IF NOT EXISTS todos (
    id CHAR(36) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('To Do', 'In Progress', 'Completed') DEFAULT 'To Do'
);