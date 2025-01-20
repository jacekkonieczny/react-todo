import React from 'react';
import TodoItem from "./TodoItem";

interface Todo {
    id: string;
    title: string;
    description: string;
    status: string;
}

interface TodoListProps {
    todos: Todo[];
}

const TodoList = ({todos}: TodoListProps) => {
    return (
        <div className="todo-list">
            <div className="todo-list__header">
                <span className="todo-list__header-item todo-list__header-item--number">#</span>
                <span className="todo-list__header-item todo-list__header-item--title">Task Title</span>
                <span className="todo-list__header-item todo-list__header-item--status">Status</span>
                <span className="todo-list__header-item todo-list__header-item--edit">Edit</span>
                <span className="todo-list__header-item todo-list__header-item--remove">Remove</span>
            </div>
            {todos.map((todo, index) => (
                <TodoItem key={todo.id} todo={todo} index={index + 1} />
            ))}
        </div>
    );
};

export default TodoList;