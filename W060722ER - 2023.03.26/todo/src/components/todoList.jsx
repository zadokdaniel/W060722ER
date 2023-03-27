import TodoItem from "./todoItem";

const TodoList = ({
  onDelete = () => {},
  onIsCompleteChange = () => {},
  todos,
}) => {
  const completedTodo = todos.filter((todo) => todo.isComplete);

  return (
    <div className="todo-list mt-3">
      {todos.length > 0 ? (
        <>
          <div className="d-flex mb-3 justify-content-between">
            <span>
              {completedTodo.length}/{todos.length}
            </span>

            <div className="actions">
              <span
                className="me-1 btn btn-sm btn-outline-danger "
                onClick={() => onDelete()}
              >
                <i className="bi bi-trash-fill"></i>
              </span>
            </div>
          </div>

          <div className="todos-list border rounded">
            {todos
              .sort((a) => (a.isComplete ? 1 : -1))
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
          </div>
        </>
      ) : (
        <div className="bg-light rounded p-5 text-center">
          <h1 className="display-3 fw-bold">Good Job!!</h1>
          you completed all your tasks go to the beach
        </div>
      )}
    </div>
  );
};

export default TodoList;
