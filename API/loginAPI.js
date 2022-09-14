var mysql = require("mysql");
const express = require("express");
const fileUpload = require("express-fileupload");
var cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const multer = require("multer");
const { restart } = require("nodemon");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "Gamification",
});

con.connect(function (err) {
  if (err) {
    console.log("not Connected!");
    throw err;
  }
  console.log("Connected!");
});

app.post("/api/login", (req, res) => {

  con.connect(function (err) {
    con.query(
      `SELECT username FROM users where username='${req.body.username}' and password='${req.body.password}';`,
      function (err, rows) {
        if (err) {
         throw(err);
        }
        if (rows.length==0) {
          res.send(rows);
        }
        else{
          res.send(rows);
        }
      }
    );
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port} ...`));
