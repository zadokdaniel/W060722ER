import TodoItem from "./todoItem";

const TodoList = ({ onDelete, onIsCompleteChange, todos }) => {
  return (
    <div className="todo-list">
      <ul className="list-group">
        {todos
          .sort((a, b) => (a.isComplete ? 1 : -1))
          .map((todo) => (
            <TodoItem
              onDelete={() => onDelete(todo.id)}
              onIsCompleteChange={(isComplete) =>
                onIsCompleteChange(todo.id, isComplete)
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
