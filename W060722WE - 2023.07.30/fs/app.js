const fs = require("node:fs");

// const stat = fs.statSync(__filename);
// console.log("sync", stat);

// fs.stat(__filename, (err, stat) => {
//   console.log("cb", stat);
// });

// const fsp = require("node:fs/promises");

// fsp.stat(__filename).then((stat) => console.log("promise", stat));

const path = require("node:path");

const file = path.resolve(__dirname, "./myText.txt");
// console.log(fs.statSync(file));

fs.watchFile(file, (a, b) => console.log(a.size, b.size));



