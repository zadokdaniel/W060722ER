require("dotenv/config");

const mysql = require("./dbs/mysql");

mysql.query(
  "SELECT * FROM `employees` WHERE `status` = 1",
  function (err, results, fields) {
    if (err) {
      console.log("ERROR:", err);
      return;
    }

    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

function getMessages() {
  return new Promise((resolve, reject) => {
    mysql.query("SELECT * FROM messages", (err, result) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(result);
    });
  });
}

getMessages()
  .then((result) => {})
  .catch((err) => {});

function getMessages(id, cb) {
  return mysql.query(
    `SELECT * FROM messages WHERE id=${id} AND name="${name}"`,
    cb
  );
}

getMessages((err, result) => {});
