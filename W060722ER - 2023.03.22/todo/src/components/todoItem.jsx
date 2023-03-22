const TodoItem = () => {
  return (
    <li className="list-group-item">
      <input
        className="form-check-input me-2"
        type="checkbox"
        id="firstCheckbox"
      />
      <label className="form-check-label" htmlFor="firstCheckbox">
        First checkbox
      </label>
    </li>
    //    <li className="list-group-item text-muted">
    //    <input
    //      className="form-check-input me-2"
    //      type="checkbox"
    //      id="thirdCheckbox"
    //      checked
    //    />
    //    <label
    //      className="form-check-label text-decoration-line-through"
    //      htmlFor="thirdCheckbox"
    //    >
    //      Third checkbox
    //    </label>
    //  </li>
  );
};

export default TodoItem;
