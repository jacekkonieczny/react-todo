import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

interface Todo {
    id: string;
    title: string;
    description: string;
    status: string;
}

interface TodoItemProps {
    todo: Todo;
    index: number;
}

const TodoItem = ({todo, index}: TodoItemProps) => {
    const [status, setStatus] = useState<string>("To Do");
    const [descriptionVisible, setDescriptionVisible] = useState<boolean>(false);

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

    return (
        <div className="todo-item">
            <div className="todo-item__main">
                <span className="todo-item__number">{index}</span>
                <div className="todo-item__title">{todo.title}
                    <FontAwesomeIcon icon={descriptionVisible ? faChevronUp : faChevronDown} size="lg" className="todo-item__toggle-description" onClick={toggleDescription} />
                </div>
                <div className="todo-item__status">
                    <div className={`todo-item__status-button ${status.toLowerCase().replace(" ", "-")}`} onClick={handleStatusChange}>{status}</div>
                </div>
                <div className="todo-item__edit">
                    <div className="todo-item__edit-button"><FontAwesomeIcon icon={faPenToSquare} size="lg"/></div>
                </div>
                <div className="todo-item__remove">
                    <div className="todo-item__remove-button"><FontAwesomeIcon icon={faTrash} size="lg"/></div>
                </div>
            </div>
            <div className={`todo-item__description ${descriptionVisible? "visible" : ""}`}>{todo.description}</div>
        </div>

    );
};

export default TodoItem;