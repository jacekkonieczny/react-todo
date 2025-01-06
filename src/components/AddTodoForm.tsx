import React from 'react';

const AddTodoForm = () => {
    return (
        <div className="add-todo-form">
            <input className="add-todo-form__input add-todo-form__input--title" type="text" placeholder="task title..."/>
            <textarea className="add-todo-form__input add-todo-form__input--description" placeholder="task description..."/>
            <button className="add-todo-form__button" type="submit">add task</button>
        </div>
    );
};

export default AddTodoForm;