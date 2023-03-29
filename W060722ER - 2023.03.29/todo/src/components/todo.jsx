import TodoForm from "./todoForm";
import TodoList from "./todoList";
import { useTodo } from "../hooks/useTodo";

const Todo = () => {
  const { todos, add, remove, editIsComplete } = useTodo();

  return (
    <div className="todo-container container">
      <TodoForm onSubmit={add} />

      <TodoList
        onItemDelete={remove}
        onItemIsCompleteChange={editIsComplete}
        todos={todos}
      />
    </div>
  );
};

export default Todo;
