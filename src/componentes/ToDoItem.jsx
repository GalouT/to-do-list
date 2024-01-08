import React from "react";

export default function TodoItem({ todo, onComplete, onDeleteItem }) {
  const getStyle = () => {
    return {
      textDecoration: todo.completed ? "line-through double red" : "none",
      textDecorationColor: todo.completed ? "red" : "black",
    };
  };

  return (
    <div style={getStyle()} className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onComplete(todo.id)}
      />
      {todo.task.toUpperCase()}
      <button className="add-btn" onClick={() => onDeleteItem(todo.id)}>
        ×
      </button>
    </div>
  );
}
