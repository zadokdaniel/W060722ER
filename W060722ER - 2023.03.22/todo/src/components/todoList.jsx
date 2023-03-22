import TodoItem from "./todoItem";

const TodoList = () => {
  return (
    <div className="todo-list">
      <ul className="list-group">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
};

export default TodoList;
