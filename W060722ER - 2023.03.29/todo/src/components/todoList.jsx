import TodoItem from "./todoItem";

const TodoList = ({
  onItemDelete = () => {},
  onItemIsCompleteChange = () => {},
  todos,
}) => {
  return (
    <div className="todo-list">
      <ul className="list-group">
        {todos
          .sort((a, b) => (a.isComplete ? 1 : -1))
          .map((todo) => (
            <TodoItem
              onDelete={() => onItemDelete(todo.id)}
              onIsCompleteChange={(isComplete) =>
                onItemIsCompleteChange(todo.id, isComplete)
              }
              key={todo.id}
              todo={todo}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
