import React, { useState } from "react";
import "./App.css";
import classNames from "classnames";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { task: inputValue, completed: false }]);
    setInputValue("");
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  return (
    <div className="todo-app">
      <h1>Task Management</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your task..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={classNames({ completed: todo.completed })}>
            {todo.task}
            <div className="buttons">
              {!todo.completed && (
                <button
                  className="done-btn"
                  onClick={() => handleToggleComplete(index)}
                >
                  Done
                </button>
              )}
              <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
