module.exports = function logger(req, res) {
  console.log(new Date().toLocaleTimeString(), req.method, req.url);
};
