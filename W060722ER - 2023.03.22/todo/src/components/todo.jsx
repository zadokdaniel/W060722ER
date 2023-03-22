import TodoForm from "./todoForm";
import TodoList from "./todoList";

const Todo = () => {
  return (
    <div className="todo-container container">
      <TodoForm />

      <TodoList />
    </div>
  );
};

export default Todo;
