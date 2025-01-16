import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

const TodoItem = () => {
    const [status, setStatus] = useState<string>("To Do");

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

    return (
        <div className="todo-item">
            <span className="todo-item__field todo-item__field--number">1</span>
            <span className="todo-item__field todo-item__field--title">Lorem ipsum dolor sit.</span>
            <span className="todo-item__field todo-item__field--description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, provident.
    </span>
            <div className="todo-item__field todo-item__field--status">
                <div className={`todo-item__button todo-item__button--status ${status.toLowerCase().replace(" ", "-")}`} onClick={handleStatusChange}>{status}</div>
            </div>
            <div className="todo-item__field todo-item__field--edit">
                <div className="todo-item__button todo-item__button--edit"><FontAwesomeIcon icon={faPenToSquare} size="lg"/></div>
            </div>
            <div className="todo-item__field todo-item__field--remove">
                <div className="todo-item__button todo-item__button--remove"><FontAwesomeIcon icon={faTrash} size="lg"/></div>
            </div>
        </div>
    );
};

export default TodoItem;