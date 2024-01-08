import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos, onComplete, onDeleteItem }) {
  return (
    <div>
      {todos.length === 0 ? (
        <div className="todo-item-empty uppercase">
          No tenés tareas pendientes
        </div>
      ) : (
        todos.map((todo, index) => (
          <ToDoItem
            todo={todo}
            key={index}
            onComplete={onComplete}
            onDeleteItem={onDeleteItem}
          />
        ))
      )}
    </div>
  );
}
