function Actions({ actions = [], size = "sm", space = 1, ...rest }) {
  return (
    <div className="actions" {...rest}>
      {actions
        .filter((action) => !action.isHidden)
        .map(
          (
            {
              events = {},
              color = "primary",
              isOutline = false,
              icon = "",
              text = "",
              isHidden = false,
            },
            index
          ) => (
            <span
              key={index}
              className={`me-${space} btn btn-${size} btn${
                isOutline ? "-outline" : ""
              }-${color}`}
              {...events}
            >
              {text ? text : <i className={icon}></i>}
            </span>
          )
        )}
    </div>
  );
}

export default Actions;
