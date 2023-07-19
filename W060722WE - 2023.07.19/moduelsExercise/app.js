const { getOSInfo, TYPES } = require("./os/summary");

console.log(getOSInfo());
console.log(getOSInfo([TYPES.CPU, TYPES.MEM]));
