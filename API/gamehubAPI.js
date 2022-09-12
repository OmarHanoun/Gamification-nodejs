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

app.get("/api/games", (req, res) => {
  con.connect(function (err) {
    con.query("SELECT * FROM games;", function (err, rows) {
      if (err) throw err;
      res.send(rows);
    });
  });
});

app.get("/api/games/:id", (req, res) => {
  con.connect(function (err) {
    con.query(
      `SELECT * FROM games where id=${req.params.id};`,
      function (err, rows) {
        if (err) throw err;
        res.send(rows);
      }
    );
  });
});

app.put("/api/games/:id", (req, res) => {
  con.connect(function (err) {
    con.query(
      `UPDATE games SET name = '${req.body.name}',image='${req.body.image}'
        ,availability='${req.body.availability}' WHERE id = '${req.params.id}' `,
      function (err, rows) {
        if (err) throw err;
        res.send("Updated successfully !");
      }
    );
  });
});

app.post("/api/games", (req, res) => {
  con.connect(function (err) {
    con.query(
      `INSERT INTO games (name,image,availability) VALUES ('${req.body.name}',
          '${req.body.image}','${req.body.availability}')`,
      function (err, rows) {
        if (err) throw err;
        res.send("Added successfully !");
      }
    );
  });
});

app.post("/api/games", (req, res) => {
  con.connect(function (err) {
    con.query(
      `INSERT INTO games (name,image,availability) VALUES ('${req.body.name}',
        '${req.body.image}','${req.body.availability}')`,
      function (err, rows) {
        if (err) throw err;
        res.send("Added successfully !");
      }
    );
  });
});

app.put("/api/games/:id", (req, res) => {
  con.connect(function (err) {
    con.query(
      `UPDATE games SET video = '${req.body.video}',story='${req.body.story}'
          ,author='${req.body.author}' WHERE id = '${req.params.id}' `,
      function (err, rows) {
        if (err) throw err;
        res.send("Updated successfully !");
      }
    );
  });
});

app.delete("/api/games/:id", (req, res) => {
  con.connect(function (err) {
    con.query(
      `DELETE FROM games WHERE id = '${req.params.id}' `,
      function (err, rows) {
        if (err) throw err;
        res.send("Deleted successfully !");
      }
    );
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port} ...`));
