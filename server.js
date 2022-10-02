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

app.get("/", (req, res) => {
  res.send("Home Page !");
});

app.get("/api/games", (req, res) => {
  con.connect(function (err) {
    con.query("SELECT * FROM games;", function (err, rows) {
      if (err) throw err;
      res.send(rows);
    });
  });
});
app.get("/api/stories", (req, res) => {
  con.connect(function (err) {
    con.query("SELECT * FROM stories;", function (err, rows) {
      if (err) throw err;
      res.send(rows);
    });
  });
});
app.post("/api/stories/filename", (req, res) => {
  con.connect(function (err) {
    con.query(
      `SELECT file FROM stories where author='${req.body.author}' and title='${req.body.story_name}';`,
      function (err, rows) {
        if (err) throw err;
        res.send(rows);
      }
    );
  });
});
app.post("/stories/videoname", (req, res) => {
  con.connect(function (err) {
    con.query(
      `SELECT video FROM stories where author='${req.body.author}' and title='${req.body.story_name}';`,
      function (err, rows) {
        if (err) throw err;
        res.send(rows);
      }
    );
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

app.get("/api/stories/:id", (req, res) => {
  con.connect(function (err) {
    con.query(
      `SELECT * FROM stories where id=${req.params.id};`,
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

app.post("/api/story", (req, res) => {
  con.connect(function (err) {
    con.query(`INSERT INTO stories (video,story,author,title,file) VALUES ('${req.body.video}',
      '${req.body.story}','${req.body.author}','${req.body.title}','${req.body.file}')`);
  });
});

app.put("/api/stories/:id", (req, res) => {
  con.connect(function (err) {
    con.query(
      `UPDATE stories SET rate=${req.body.rate} WHERE id = '${req.params.id}' `,
      function (err, rows) {
        if (err) throw err;
        res.send("Updated successfully !");
        console.log(req.body.rate);
        console.log(typeof req.body.rate);
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

// app.post("/api/story", (req, res) => {
//   con.connect(function (err) {
//     con.query(`INSERT INTO stories (video,story,author) VALUES ('${req.body.video}',
//     '${req.body.story}','${req.body.author}')`);
//   });
// });

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

// app.post("/uploadProfilePicture", function (req, res, next) {
//   upload(req, res, function (err) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send("Success, Image uploaded!");
//     }
//   });
// });

app.get("/", function (req, res) {
  res.render("Signup");
});

app.post("/api/upload", (req, res) => {
  const newpath = __dirname + "/files/";
  const file = req.files.file;
  const filename = file.name;
  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.status(500).send({ message: "File upload failed", code: 200 });
    } else {
      res.status(200).send({ message: "File Uploaded", code: 200 });
    }
  });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage }).array("file");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    } else {
      return res.status(200).send(req.files);
    }
  });
});

app.post("/api/story/rate", (req, res) => {
  con.connect(function (err) {
    con.query(
      `INSERT INTO stories_rate (story_name,username,rate,feed_back) VALUES ('${req.body.story_name}',
        '${req.body.username}','${req.body.rate}','${req.body.feed_back}')`,
      function (err, rows) {
        if (err) throw err;
        res.send("rated successfully !");
        console.log("rated successfully !");
      }
    );
  });
});

app.get("/api/story/story_rates", (req, res) => {
  con.connect(function (err) {
    con.query("SELECT * FROM stories_rate;", function (err, rows) {
      if (err) throw err;
      res.send(rows);
    });
  });
});

app.post("/api/story/story_rates", (req, res) => {
  con.connect(function (err) {
    con.query(
      `SELECT rate FROM stories_rate where username='${req.body.username}' and story_name='${req.body.story_name}';`,
      function (err, rows) {
        if (err) throw err;
        res.send(rows);
      }
    );
  });
});

app.post("/api/story/rate_story", (req, res) => {
  con.connect(function (err) {
    con.query(
      `INSERT INTO stories_rate (story_name,username,rate,feed_back) VALUES ('${req.body.story_name}',
        '${req.body.username}','${req.body.rate}','${req.body.feed_back}')`,
      function (err, rows) {
        if (err) throw err;
        res.send("rated successfully !");
        console.log("rated successfully !");
      }
    );
  });
});

app.get("/api/users", (req, res) => {
  con.connect(function (err) {
    con.query("SELECT * FROM users;", function (err, rows) {
      if (err) throw err;
      res.send(rows);
    });
  });
});

app.post("/api/login", (req, res) => {
  con.connect(function (err) {
    con.query(
      `SELECT id,username FROM users where username='${req.body.username}' and password='${req.body.password}';`,
      function (err, rows) {
        if (err) {
          throw err;
        }
        if (rows.length == 0) {
          res.send(rows);
        }
        else {
          res.send(rows);
        }
      }
    );
  });
});

app.post("/api/moderators", (req, res) => {
  con.connect(function (err) {
    con.query(
      `SELECT username FROM moderators where username='${req.body.username}'`,
      function (err, rows) {
        if (err) {
          throw err;
        }
        if (rows.length == 0) {
          res.send(false);
          // res.send(rows);
        }
        else {
          res.send(true);
        }
      }
    );
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port} ...`));
