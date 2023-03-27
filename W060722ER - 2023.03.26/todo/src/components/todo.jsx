import { useEffect, useState } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import { v4 as uuid } from "uuid";

// TODO:
// counters
// message if no tasks left
// change form errors to bootstrap's invalid-feedback and is-invalid classes (https://getbootstrap.com/docs/5.0/forms/validation/)
// localstorage
// edit

// archive
// created at
// due date
// priority
// keyboard

const LOCAL_STORAGE_TODOS_KEY = "todos";

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_TODOS_KEY);

    return savedData ? JSON.parse(savedData) : [];
  });

  const setTodosAndSave = (newTodos) => {
    setTodos((todos) => {
      const newState =
        typeof newTodos === "function" ? newTodos(todos) : newTodos;

      localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, JSON.stringify(newState));

      return newState;
    });
  };

  const handleAdd = (title) => {
    setTodosAndSave((todos) => [
      ...todos,
      {
        id: uuid(),
        title,
        isComplete: false,
        isArchived: false,
        priority: 0,
        assignedTo: null,
        dueDate: null,
        createdAt: new Date(),
      },
    ]);
  };

  const handleRemove = (id) => {
    setTodosAndSave((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleClear = () => {
    setTodosAndSave([]);
  };

  const handleIsCompleteChange = (id, isComplete) => {
    setTodosAndSave((todos) =>
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
    <div className="todo-container container-fluid">
      <TodoForm onSubmit={handleAdd} />

      <TodoList
        onDelete={(id) => {
          id ? handleRemove(id) : handleClear();
        }}
        onIsCompleteChange={handleIsCompleteChange}
        todos={todos}
      />
    </div>
  );
};

export default Todo;
