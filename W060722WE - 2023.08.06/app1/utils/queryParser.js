module.exports = (req) => {
  const baseURL = req.protocol + "://" + req.headers.host + "/";

  const parsed = new URL(req.url, baseURL);

  let query = {};
  for (const [key, value] of parsed.searchParams.entries()) {
    query[key] = value;
  }

  req.query = query;
  req.url = parsed.pathname;
};
