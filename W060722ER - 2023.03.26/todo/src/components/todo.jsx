import { useState } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import { v4 as uuid } from "uuid";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (title) => {
    setTodos((todos) => [
      ...todos,
      {
        id: uuid(),
        title,
        // title: title,
        isComplete: false,
        createdAt: new Date(),
      },
    ]);
  };

  const handleRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleClear = () => {
    setTodos([]);
  };

  const handleIsCompleteChange = (id, isComplete) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete,
          };
        }

        return todo;
      })
    );
  };

  return (
    <div className="todo-container container">
      <TodoForm onSubmit={handleAdd} />

      <TodoList
        onDelete={handleRemove}
        onIsCompleteChange={handleIsCompleteChange}
        todos={todos}
      />
    </div>
  );
};

export default Todo;
