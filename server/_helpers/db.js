require("dotenv").config();
const mysql = require("mysql");

if (process.env.NODE_ENV === "production") {
  console.log(`Running server in ${process.env.NODE_ENV} mode`);
  const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.db,
  });
  module.exports = db;
} else {
  console.log(`Running server in ${process.env.NODE_ENV} mode`);
  const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.db,
  });
  module.exports = db;
}
