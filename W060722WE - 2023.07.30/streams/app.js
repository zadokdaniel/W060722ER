const path = require("node:path");
const fs = require("node:fs");

const ws = fs.createWriteStream(path.resolve(__dirname, "./myfile.txt"), {
  encoding: "utf-8",
});

ws.write("hello");
ws.write("hello");
ws.write("hello");
ws.write("hello");
ws.write("hello");
ws.write("hello");
ws.end();

// const intervalId = setInterval(() => {
//   ws.write("hello");
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
//   ws.write("bye");
//   ws.end();
// }, 10000);

const rs = fs.createReadStream(path.resolve(__dirname, "./myText.txt"), {
  encoding: "utf-8",
});

let counter = 0;
rs.on("data", (chunk) => {
  console.log(++counter);

  // implemnting pipe
  // ws.write(chunk)
});

rs.on("close", () => {
  console.log("ended");
  
  // implemnting pipe
  // ws.end()
});

// rs.pipe(ws);
