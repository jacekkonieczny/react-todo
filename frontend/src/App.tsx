import React, {useEffect, useState} from 'react';
import './scss/App.scss'
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from 'uuid';

interface Todo {
    id: string;
    title: string;
    description: string;
    status: string;
}

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetch("http://localhost:6969/api/todos")
            .then((res) => res.json())
            .then((data) => setTodos(data))
            .catch((err) => console.error("error fetching data", err));
    }, []);

    const addTodo = (title: string, description: string) => {
        const newTodo: Todo = {
            id: uuidv4(),
            title,
            description,
            status: "To Do",
        }

        fetch("http://localhost:6969/api/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo)
        })
            .then((res) => res.json())
            .then((data) => setTodos([...todos, data]))
            .catch((err) => console.error("error adding todo", err));
    }

    const deleteTodo = (id: string) => {
        fetch(`http://localhost:6969/api/todos/${id}`,{
            method: "DELETE"
        })
            .then(() => {
                setTodos(todos.filter((todo) => todo.id !== id));
            })
            .catch((err) => console.error("error deleting todo", err));
    }

    const editTodo = (id: string, editedTitle: string, editedDescription: string, status: string)=> {
        const updatedTodo = {title: editedTitle, description: editedDescription, status: status};

        fetch(`http://localhost:6969/api/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTodo)
        })
            .then(() => {
                setTodos(todos.map((todo) =>
                    todo.id === id
                        ? {...todo, title: editedTitle, description: editedDescription, status}
                        : todo
                ));
            })
            .catch((err) => console.error("error editing todo", err));
    }

  return (
    <div className="App">
        <header className="app-header">
            <h1>React Todo</h1>
        </header>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todos={todos} onDeleteTodo={deleteTodo} onEditTodo={editTodo} />
    </div>
  );
}

export default App;
