import React, {useState} from 'react';
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

    const addTodo = (title: string, description: string) => {
        const newTodo: Todo = {
            id: uuidv4(),
            title,
            description,
            status: "To do"
        }
        setTodos([...todos, newTodo]);
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const editTodo = (id: string, editedTitle: string, editedDescription: string)=> {
        setTodos(todos.map((todo) =>
            todo.id === id
            ? {...todo, title: editedTitle, description: editedDescription}
            : todo
        ));
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
