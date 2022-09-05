
const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(req,res){
    res.send("upload home page")
    }
)
    
app.post("/upload", (req, res) => {
    const newpath = __dirname + "/files/";
    const file = req.files
    .file;
    const filename = file.name;
    file.mv(`${newpath}${filename}`, (err) => {
      if (err){
        res.status(500).send({ message: "File upload failed", code: 200 });
      }
      else{
        res.status(200).send({ message: "File Uploaded", code: 200 });
      }
    });
});


app.listen(8080,function(error) {
    if(error) throw error
        console.log("Server created Successfully on PORT 8080")
})
