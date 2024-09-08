import React, { useState } from "react";
import "./styles/styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;

    if (todos.some((todo) => todo.text === inputValue)) {
      alert("Todo already exists!");
      return;
    }

    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const completeAllTodos = () => {
    const newTodos = todos.map((todo) => ({ ...todo, completed: true }));
    setTodos(newTodos);
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const pendingCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="app">
      <h1 className="heading">Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          className="input-box"
          placeholder="Enter a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
        />
        <button className="add-button" onClick={addTodo}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <i
              className="fas fa-check complete-icon"
              onClick={() => toggleComplete(index)}
            ></i>
            <span>{todo.text}</span>
            <button className="remove-button" onClick={() => removeTodo(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="actions">
        <button className="complete-all-button" onClick={completeAllTodos}>
          Complete All
        </button>
        <button className="delete-all-button" onClick={deleteAllTodos}>
          Delete All
        </button>
      </div>
      <div className="stats">
        <p>
          Pending Todos: <span>{pendingCount}</span>
        </p>
        <p>
          Completed Todos: <span>{completedCount}</span>
        </p>
        <p>
          Total Todos: <span>{todos.length}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
