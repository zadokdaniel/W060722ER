console.log(`hello from ${__filename}`);

const _ = require("lodash");
const cowsay = require("cowsay");

const arr = [1, 2, 3, 4, 5, 6];
console.log(`reversed: ${_.reverse(arr)}`);

const cow = cowsay.say({
  text: process.argv[2] || "hello, sir",
  f: "R2-D2",
});
console.log(cow);
