import { useState, useEffect } from "react";
import "./App.css";
import ToDoList from "./componentes/ToDoList";
import ToDoForm from "./componentes/ToDoForm";

function App() {
  const [todos, setTodos] = useState(() => {
    const listStorage = window.localStorage.getItem("lista");
    return listStorage ? JSON.parse(listStorage) : [];
  });

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const formattedDate = new Date().toLocaleDateString("es", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lista", JSON.stringify(todos));
  }, [todos]);

  const onComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      })
    );
  };

  const onDeleteItem = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const addToDo = (newToDo) => {
    const newItem = { id: +new Date(), task: newToDo, completed: false };
    setTodos([...todos, newItem]);
  };

  return (
    <div className="container">
      <h2 className="fecha">{currentDate}</h2>
      <ToDoForm addToDo={addToDo} todos={todos} />
      <ToDoList
        todos={todos}
        onComplete={onComplete}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}

export default App;
