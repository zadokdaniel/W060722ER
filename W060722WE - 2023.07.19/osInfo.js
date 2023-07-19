const os = require("node:os");

console.log(`OS: ${os.type()} ${os.arch()}`);

console.log("CPUs: ", os.cpus().length);

const memoryUsagePercent = (os.freemem() / os.totalmem()) * 100;
console.log(`Memory Usage: ${memoryUsagePercent.toFixed(2)}%`);
