module.exports = function logger(req, res) {
  console.log(req.method, req.url);
};
