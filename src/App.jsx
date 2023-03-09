import { createSignal } from "solid-js";

function TodoApp() {
  const [todos, setTodos] = createSignal([]);
  const [newTodo, setNewTodo] = createSignal("");

  function addTodo() {
    if (newTodo()) {
      setTodos([...todos(), { text: newTodo(), completed: false }]);
      setNewTodo("");
    }
  }

  function deleteTodo(index) {
    const newTodos = [...todos()];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function toggleCompleted(index) {
    const newTodos = [...todos()];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo()}
        onInput={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos().map((todo, index) => (
          <li>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
