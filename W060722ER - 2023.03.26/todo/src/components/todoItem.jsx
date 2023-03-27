import { useState } from "react";
import Actions from "./common/actions";
import classNames from "classnames";

const TodoItem = ({
  onIsCompleteChange = () => {},
  onDelete = () => {},
  onChange = () => {},
  todo: { id, title, isComplete, createdAt },
}) => {
  const [edit, setEdit] = useState(title);
  const [isEditing, setIsEditing] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleEditMode = (isEditing = null) => {
    setIsEditing((isEditing) => {
      if (isEditing === null) {
        isEditing = !isEditing;
      }

      return isEditing;
    });
  };

  const handleEditSubmit = () => {
    if (edit.length < 2) {
      return;
    }
    onChange();
  };

  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={classNames(
        "list-group-item position-relative  border-bottom p-2",
        {
          "text-muted": isComplete,
        }
      )}
    >
      <div className="d-flex align-items-center">
        <input
          className="form-check-input me-2 flex-shrink-0"
          type="checkbox"
          id={`todo-${id}`}
          checked={isComplete}
          onChange={(e) => onIsCompleteChange(e.target.checked)}
        />
        {isEditing ? (
          <input
            value={title}
            type="text"
            className="form-control form-control-sm pe-2"
          />
        ) : (
          <label
            className={classNames("form-check-label lh-2 flex-fill", {
              "text-decoration-line-through": isComplete,
            })}
            htmlFor={`todo-${id}`}
          >
            {title}
          </label>
        )}
        {isEditing ? (
          <Actions
            className="ms-auto flex-shrink-0"
            actions={[
              {
                events: { onClick: () => setIsEditing(false) },
                color: "success",
                icon: "bi bi-check-lg",
                isHidden: !isEditing,
              },
              {
                events: { onClick: () => handleEditMode(false) },
                color: "danger",
                icon: "bi bi-x",
                isHidden: !isEditing,
              },
            ]}
          />
        ) : (
          isHovered && (
            <Actions
              className="ms-auto flex-shrink-0 position-absolute end-0"
              actions={[
                {
                  events: { onClick: () => handleEditMode(true) },
                  color: "warning",
                  icon: "bi bi-pencil-fill",
                  isHidden: isComplete || isEditing,
                },
                {
                  events: { onClick: onDelete },
                  color: "danger",
                  icon: "bi bi-trash-fill",
                  isHidden: isEditing,
                },
                {
                  events: { onClick: onDelete },
                  color: "danger",
                  icon: "bi bi-archive-fill",
                  isHidden: isEditing,
                },
              ]}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TodoItem;
