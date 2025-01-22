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

  return (
    <div className="App">
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
