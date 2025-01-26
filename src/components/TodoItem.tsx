import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave, faChevronDown, faChevronUp, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

interface Todo {
    id: string;
    title: string;
    description: string;
    status: string;
}

interface TodoItemProps {
    todo: Todo;
    index: number;
    handleDelete: (id: string) => void;
    handleEdit: (id: string, editedTitle: string, editedDescription: string) => void;
}

const TodoItem = ({todo, index, handleDelete, handleEdit}: TodoItemProps) => {
    const [status, setStatus] = useState<string>("To Do");
    const [descriptionVisible, setDescriptionVisible] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editTitle, setEditTitle] = useState<string>(todo.title);
    const [editDescription, setEditDescription] = useState<string>(todo.description);

    const handleStatusChange = () => {
        let nextStatus: string = "To Do";

        if (status === "To Do") {
            nextStatus = "In Progress";
        } else if (status === "In Progress") {
            nextStatus = "Completed";
        } else if (status === "Completed") {
            nextStatus = "To Do";
        }

        setStatus(nextStatus);
    }

    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    }

    const handleSave = () => {
        handleEdit(todo.id, editTitle, editDescription);
        setIsEditing(false);
    }

    return (
        <div className="todo-item">
            <div className="todo-item__main">
                <span className="todo-item__number">{index}</span>
                <div className="todo-item__title">
                    {isEditing ? (
                        <input className="todo-item__title-input" type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                    ) : (
                        <>
                            {todo.title}
                            <FontAwesomeIcon icon={descriptionVisible ? faChevronUp : faChevronDown} size="lg" className="todo-item__toggle-description" onClick={toggleDescription} />
                        </>
                    )}
                </div>
                <div className="todo-item__status">
                    <div className={`todo-item__status-button ${status.toLowerCase().replace(" ", "-")}`} onClick={handleStatusChange}>{status}</div>
                </div>
                <div className="todo-item__edit">
                    {isEditing ? (
                        <div className="todo-item__save-button" onClick={handleSave}><FontAwesomeIcon icon={faSave} size="lg"/></div>
                    ) : (
                        <div className="todo-item__edit-button" onClick={() => setIsEditing(true)}><FontAwesomeIcon icon={faPenToSquare} size="lg"/></div>)}
                </div>
                <div className="todo-item__remove">
                    <div className="todo-item__remove-button" onClick={() => handleDelete(todo.id)}><FontAwesomeIcon icon={faTrash} size="lg"/></div>
                </div>
            </div>
            {isEditing ? (
                <textarea className="todo-item__description-input" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} rows={2} />
            ) : (
                <div className={`todo-item__description ${descriptionVisible ? "visible" : ""}`}>{todo.description}</div>
            )}
        </div>

    );
};

export default TodoItem;