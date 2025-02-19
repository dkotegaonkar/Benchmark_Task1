import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoApp = () => {
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem("allTodos")) || [];
    });
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
        setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem("allTodos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (inputValue.trim() === "") return;
        setTodos([...todos, inputValue]);
        setInputValue("");
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const editTodo = (index, newText) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = newText;
        setTodos(updatedTodos);
    };

    const emptyTodos = () => {
        if (window.confirm("Are you sure you want to delete all todos?")) {
            setTodos([]);
        }
    };

    return (
        <div className="container mt-5 w-50">
            <h1 className="text-center">Todo App</h1>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="btn btn-outline-secondary" onClick={addTodo}>Add</button>
                <button className="btn btn-outline-secondary" onClick={emptyTodos}>Empty</button>
            </div>
            <ul className="list-group">
                {todos.map((todo, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between">
                        <input 
                            type="text" 
                            className="form-control border-0" 
                            value={todo} 
                            onChange={(e) => editTodo(index, e.target.value)}
                            onBlur={() => setTodos([...todos])}
                        />
                        <button className="btn btn-warning" onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
