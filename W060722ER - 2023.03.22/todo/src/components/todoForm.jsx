const TodoForm = () => {
  return (
    <div className="todo-form">
      <div className="input-group mb-3">
        <span className="input-group-text">I need to:</span>
        <input type="text" className="form-control" placeholder="Buy milk" />
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  );
};

export default TodoForm;




