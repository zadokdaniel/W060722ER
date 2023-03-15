function Hello(props) {
  return (
    <div style={{ color: props.color ? props.color : "blue" }}>
      bye, {props.name}
    </div>
  );
}

export default Hello;
