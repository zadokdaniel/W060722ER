const TodoItem = ({
  onDelete = () => {},
  onIsCompleteChange = () => {},
  todo: { id, title, isComplete, createdAt },
}) => {
  return (
    <li
      className={[`list-group-item`, isComplete ? "text-muted" : ""].join(" ")}
    >
      <input
        className="form-check-input me-2"
        type="checkbox"
        id="firstCheckbox"
        checked={isComplete}
        onChange={(e) => onIsCompleteChange(e.target.checked)}
      />
      <label
        className={[
          "form-check-label",
          isComplete ? "text-decoration-line-through" : "",
        ].join(" ")}
        htmlFor="firstCheckbox"
      >
        {title}
      </label>

      <span onClick={() => onDelete()}>
        <i className="bi bi-trash-fill"></i>
      </span>
    </li>
  );
};

export default TodoItem;
