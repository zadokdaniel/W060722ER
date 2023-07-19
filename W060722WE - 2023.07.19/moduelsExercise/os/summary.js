const osInfo = require("./info");

const OPTION_TYPES = {
  TYPE: 1,
  CPU: 2,
  MEM: 3,
  ARCH: 4,
};

const OPTIONS = {
  [OPTION_TYPES.TYPE]: () => `Type: ${osInfo.getType()}`,
  [OPTION_TYPES.CPU]: () => `Amount of CPUs: ${osInfo.getAmountOfCPUs()}`,
  [OPTION_TYPES.MEM]: () =>
    `Used Memory: ${osInfo.getMemoryUsagePercentage().toFixed(2)}%`,
  [OPTION_TYPES.ARCH]: () => `Architecture: ${osInfo.getArchitecture()}`,
};

const DEFAULT_OPTIONS = [
  OPTION_TYPES.TYPE,
  OPTION_TYPES.ARCH,
  OPTION_TYPES.CPU,
  OPTION_TYPES.MEM,
];

function getOSInfo(options) {
  options = Array.isArray(options) ? options : DEFAULT_OPTIONS;

  return options.map((option) => OPTIONS[option]())
}

module.exports = {
  getOSInfo,
  TYPES: OPTION_TYPES,
};
