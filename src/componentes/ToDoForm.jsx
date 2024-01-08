import React, { useState } from "react";

export default function ToDoForm({ addToDo }) {
  const [userInput, setUserInput] = useState("");
  const handleOnChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const habdleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      addToDo(userInput);
      setUserInput("");
    }
  };
  return (
    <div
      style={{
        margin: 20,
      }}
    >
      <form onSubmit={habdleSubmit} className="todo-form">
        <input
          className="todo-form input"
          type="text"
          style={{ marginRight: 20 }}
          value={userInput}
          onChange={handleOnChange}
          placeholder="Tarea..."
        />

        <button className="todo-form">Agregar</button>
      </form>
    </div>
  );
}
