var mysql = require('mysql');
const express=require("express");
const fileUpload=require("express-fileupload");
var cors = require('cors');
const app=express();
app.use(express.json());
app.use(cors());

const multer  = require('multer')
const upload = multer({ dest: 'CXHeroVideos/' }) //username

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database:"Gamification"
});
con.connect(function(err) {
    if (err){
        console.log("not Connected!");
        throw err;
    }  
    console.log("Connected!");
});



app.get('/',(req,res)=>{
    res.send("Home Page !")
});

app.get('/api/games',(req,res)=>{
    con.connect(function(err) {
        con.query("SELECT * FROM games;", function (err, rows) {
          if (err) throw err;
          res.send(rows);
        });
      });
})

app.get('/api/stories',(req,res)=>{
  con.connect(function(err) {
      con.query("SELECT * FROM cxhero;", function (err, rows) {
        if (err) throw err;
        res.send(rows);
      });
    });
})

app.get('/api/games/:id',(req,res)=>{
    con.connect(function(err) {
        con.query(`SELECT * FROM games where id=${req.params.id};`, function (err, rows) {
          if (err) throw err;
          res.send(rows);
        });
    });
  }
)

app.get('/api/stories/:id',(req,res)=>{
  con.connect(function(err) {
      con.query(`SELECT * FROM cxhero where id=${req.params.id};`, function (err, rows) {
        if (err) throw err;
        res.send(rows);
      });
  });
}
)

app.put('/api/games/:id',(req,res)=>{
  con.connect(function(err) {
      con.query(`UPDATE games SET name = '${req.body.name}',image='${req.body.image}'
      ,availability='${req.body.availability}' WHERE id = '${req.params.id}' `, function (err, rows){
        if (err) throw err;
        res.send("Updated successfully !");
      });
    });
})

app.put('/api/stories/:id',(req,res)=>{
  con.connect(function(err) {
      con.query(`UPDATE cxhero SET video = '${req.body.video}',story='${req.body.story}'
      ,author='${req.body.author}' WHERE id = '${req.params.id}' `, function (err, rows){
        if (err) throw err;
        res.send("Updated successfully !");
      });
    });
})


app.post('/api/games',(req,res)=>{
    con.connect(function(err) {
        con.query(`INSERT INTO games (name,image,availability) VALUES ('${req.body.name}',
        '${req.body.image}','${req.body.availability}')`, function (err, rows) {
          if (err) throw err;
          res.send("Added successfully !");
        });
    });
})

app.post('/api/story',(req,res)=>{
  con.connect(function(err){
    con.query(`INSERT INTO cxhero (video,story,author) VALUES ('${req.body.video}',
    '${req.body.story}','${req.body.author}')`)
  })
})


app.put('/api/games/:id',(req,res)=>{
    con.connect(function(err) {
        con.query(`UPDATE games SET video = '${req.body.video}',story='${req.body.story}'
        ,author='${req.body.author}' WHERE id = '${req.params.id}' `, function (err, rows){
          if (err) throw err;
          res.send("Updated successfully !");
        });
      });
})

app.delete('/api/games/:id',(req,res)=>{
    con.connect(function(err) {
        con.query(`DELETE FROM games WHERE id = '${req.params.id}' `, function (err, rows) {
          if (err) throw err;
          res.send("Deleted successfully !");
        });
      });
})

// app.post('/api/story/upload',(req,res)=>{
//         const files=req.video;
//         console.log(files)
//         return res.json({status:'logged',message:'logged'})
//     }
// )

app.post('/api/story/upload', upload.single('video'), function (req, res) {
   // req.file is the name of your file in the form above, here 'uploaded_file'
   // req.body will hold the text fields, if there were any 
   console.log(req.video)
   console.log('uploaded')
});

const port =process.env.PORT || 5000;
app.listen(port,()=>console.log(`listening on port ${port} ...`));

