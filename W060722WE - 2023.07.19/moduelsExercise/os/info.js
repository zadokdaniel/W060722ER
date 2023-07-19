const os = require("node:os");

function getType() {
  return os.type();
}

function getAmountOfCPUs() {
  return os.cpus().length;
}

function getMemoryUsagePercentage() {
  return (os.freemem() / os.totalmem()) * 100;
}

function getArchitecture() {
  return os.arch();
}

module.exports = {
  getType,
  getAmountOfCPUs,
  getMemoryUsagePercentage,
  getArchitecture,
};
