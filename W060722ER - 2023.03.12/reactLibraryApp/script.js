const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// const elements = React.createElement("div", null, "hello");
// const elements = React.createElement("div", {
//   children: "hello",
// });

function A(props) {
  console.log(props);

  const elements = React.createElement(
    "div",
    null,
    React.createElement("h1", null, "hello", "bye"),
    React.createElement("img", {
      src: "https://cdn.pixabay.com/photo/2023/03/02/19/37/tunnel-7826204_960_720.jpg",
      width: 150,
    }),
    React.createElement(
      "div",
      null,
      React.createElement("h3", null, "this is another section"),
      React.createElement("br"),
      React.createElement(
        "span",
        { style: { backgroundColor: props.color } },
        "this is a red span"
      )
    )
  );

  return elements;
}

root.render(
  React.createElement(
    "div",
    null,
    React.createElement(A, { color: "yellow" }),
    React.createElement(A, { color: "red" }),
    React.createElement(A),
    React.createElement(A),
    React.createElement(A),
    React.createElement(A)
  )
);
