var express = require("express");
var cors = require("cors");
var config = require("./config.js");

var app = express();
app.use(cors());

const mysql = require("mysql");
console.log(config.host);

const connection = mysql.createConnection({
  host: config.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.db,
});

connection.connect();

// connection.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
//   if (err) throw err;

//   console.log("The solution is: ", rows[0].solution);
// });

connection.end();

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(3001, function () {
  console.log("CORS-enabled web server listening on port 3001");
});
