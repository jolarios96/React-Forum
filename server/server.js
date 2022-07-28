const express = require("express");
const db = require("./_helpers/db");
const cors = require("cors");

const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());

// "/" route
app.get("/", (req, res) => {
  res.send("homepage");
});

// get users from users table
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    }

    // console.log(result[1].user_id); errors because output is a number?
    // must be a string or json object?
    res.send(result);
  });
});

// Create New User (UNFINISHED)
app.post("/user/create", (req, res) => {
  console.log("Created new user");
  res.send("POST Request Called");
  const id = 3;
  const email = "user_3@email.com";
  const username = "User_3";
  const password = "password";
  db.query(
    "INSERT INTO posts (user_id, user_email, user_name, user_password) VALUES (?,?,?,?)",
    [id, email, username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

// get groups from users table
app.get("/groups", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    }

    // console.log(result[1].user_id); errors because output is a number?
    // must be a string or json object?
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});
