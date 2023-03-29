import { v4 as uuid } from "uuid";
import { useState } from "react";

export const useTodo = () => {
  const [todos, setTodos] = useState([]);

  const add = (title) => {
    setTodos((todos) => {
      return [
        ...todos,
        {
          id: uuid(),
          title,
          isComplete: false,
          createdAt: new Date(),
        },
      ];
    });
  };

  const remove = (id) => {
    if (!id) {
      setTodos([]);
      return;
    }

    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const editIsComplete = (id, isComplete = null) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete:
              typeof isComplete === "boolean" ? isComplete : !todo.isComplete,
          };
        }

        return todo;
      });
    });
  };

  return {
    todos,
    add,
    remove,
    editIsComplete,
  };
};
