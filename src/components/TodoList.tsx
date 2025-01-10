import React from 'react';

const TodoList = () => {
    return (
        <div className="todo-list">
            <div className="todo-list__header">
                <span className="todo-list__header-item todo-list__header-item--number">#</span>
                <span className="todo-list__header-item todo-list__header-item--title">Task Title</span>
                <span className="todo-list__header-item todo-list__header-item--status">Status</span>
                <span className="todo-list__header-item todo-list__header-item--edit">Edit</span>
                <span className="todo-list__header-item todo-list__header-item--remove">Remove</span>
            </div>
        </div>
    );
};

export default TodoList;