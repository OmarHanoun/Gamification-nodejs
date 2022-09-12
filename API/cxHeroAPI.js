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


app.get("/api/stories", (req, res) => {
  con.connect(function (err) {
    con.query("SELECT * FROM cxhero;", function (err, rows) {
      if (err) throw err;
      res.send(rows);
    });
  });
});

app.get("/api/stories/:id", (req, res) => {
  con.connect(function (err) {
    con.query(
      `SELECT * FROM cxhero where id=${req.params.id};`,
      function (err, rows) {
        if (err) throw err;
        res.send(rows);
      }
    );
  });
});

app.put("/api/stories/:id", (req, res) => {
  con.connect(function (err) {
    con.query(
      `UPDATE cxhero SET rate=${req.body.rate} WHERE id = '${req.params.id}' `,
      function (err, rows) {
        if (err) throw err;
        res.send("Updated successfully !");
        console.log(req.body.rate);
        console.log(typeof(req.body.rate));
      }
    );
  });
});

// app.put("/api/stories/:id", (req, res) => {
//   con.connect(function (err) {
//     con.query(
//       `UPDATE cxhero SET video = '${req.body.video}',story='${req.body.story}'
//         ,author='${req.body.author}' WHERE id = '${req.params.id}' `,
//       function (err, rows) {
//         if (err) throw err;
//         res.send("Updated successfully !");
//       }
//     );
//   });
// });

app.post("/api/story", (req, res) => {
  con.connect(function (err) {
    con.query(`INSERT INTO cxhero (video,story,author) VALUES ('${req.body.video}',
      '${req.body.story}','${req.body.author}')`,
      function (err, rows) {
                if (err) throw err;
                res.send("added successfully !");
              }
      );
  });
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port} ...`));