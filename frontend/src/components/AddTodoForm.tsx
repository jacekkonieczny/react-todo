import React, {useState} from 'react';

interface AddTodoFormProps {
    onAddTodo: (title: string, description: string) => void;
}

const AddTodoForm = ({onAddTodo}: AddTodoFormProps) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddTodo(title, description);
        setTitle("");
        setDescription("");
    }

    return (
        <form className="add-todo-form" onSubmit={handleSubmit}>
            <input className="add-todo-form__input add-todo-form__input--title"
                   type="text"
                   placeholder="task title..."
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}
            />
            <textarea className="add-todo-form__input add-todo-form__input--description"
                      placeholder="task description..."
                      rows={3}
                      value={description} onChange={(e) => setDescription(e.target.value)}
            />
            <button className="add-todo-form__button" type="submit">Add Task</button>
        </form>
    );
};

export default AddTodoForm;