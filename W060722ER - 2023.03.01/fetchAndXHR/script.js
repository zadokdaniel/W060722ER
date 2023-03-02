/******** XHR */
function XHRExample() {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    //   if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    //     console.log("done");
    //   }

    console.groupCollapsed("readyState: " + this.readyState);
    try {
      console.log("status: ", this.status, this.statusText); // status
      console.log("headers (all): ", this.getAllResponseHeaders());
      console.log(
        "headers (content-type): ",
        this.getResponseHeader("Content-Type")
      );

      console.log("body: ", this.responseText);
      console.log("body (convert json): ", JSON.parse(this.responseText));
    } catch {
    } finally {
      console.groupEnd("readyState: " + this.readyState);
    }
  });

  xhr.open(
    "POST", // METHOD
    "https://jsonplaceholder.typicode.com/todos/" // URL
  );

  // SET THE REQUEST's HEADERS
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("header-name", "header value");
  xhr.setRequestHeader("header-name1", "header value1");

  xhr.send(
    /* body always string */
    JSON.stringify({
      userId: 1,
      title: "fugiat veniam minus",
      completed: false,
    })
  );
}

function fetchExample() {
  fetch("https://jsonplaceholder.typicode.com/todos/"); // GET
  fetch("https://jsonplaceholder.typicode.com/todos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      header1: "value1",
      header2: "value2",
    },
    body: JSON.stringify({
      userId: 1,
      title: "fugiat veniam minus",
      completed: false,
    }),
  }).then((response) => {
    console.log(response.status);
    console.log(response.statusText);

    console.log(response.headers);

    /** only one of them can be used. once one is used make sure not to run any of the others
     * always returns promise with the body as the requested format
     */
    response.json().then((body) => console.log(body)); // Content-Type: application/json
    // response.blob().then((body) => console.log(body)); // for any content type will receive as blob (binary)
    // response.text().then((body) => console.log(body)); // for any content type will be received as string
  });
}
