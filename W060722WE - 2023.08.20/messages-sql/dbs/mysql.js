const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DB || "eshop",
  port: process.env.MYSQL_PORT || 3306,
});

connection.connect((err) => {
  if (err) {
    throw err;
  }

  console.log("connected to mysql");
});

module.exports = connection;
