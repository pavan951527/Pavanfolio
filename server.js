const express = require('express');
const  multer = require('multer');
const app = express();
const post =  require("./api/models/posts");
const postsData  =  new post();
const projects = require("./api/models/projects");
const projectsData = new projects();
app.use(express.static('frontend'));
app.use('/uploads' , express.static('uploads'));

app.use((req , res , next)=>{
    res.setHeader("Access-control-Allow-Origin" , "*");
    next();
})

app.use(express.json());

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `\ ${file.fieldname}-${Date.now()}${getExt(file.mimetype)}`)
    }
  })
const getExt = (MimeType)=>{
    switch(MimeType){
        case "image/png":
            return ".png";
        case "image/jpeg":
            return ".jpg";
    }
}
var upload = multer({ storage: storage })

app.get("/",function(req,res){
    res.sendFile(__dirname+"/frontend/html/app.html");
})

app.get("/contact",function(req,res){
    res.sendFile(__dirname+"/frontend/html/Contact.html");
})

app.get("/api/posts"  , (req , res)=>{
     res.send(postsData.get());
});

app.get("/api/projects" , (req , res)=>{
    res.send(projectsData.get());
});
app.get("/api/posts/:post_id" , (req , res)=>{
    const postId = req.params.post_id;
   
    const foundPost  = postsData.getIndividualPost(postId);
    if(foundPost){
        res.status(200).send(foundPost);
    }
    else{
        res.status(404).send("Not found");
    }
});

app.post("/api/posts" ,upload.single("image"), (req , res)=>{
 
    const addPost = {
        "title":req.body.title,
        "id":req.body.id,
        "date":req.body.date,
        "content":req.body.content,
        "image":req.file.path
    }
   
   res.status(201).send(postsData.add(addPost));
   
})





var port = process.env.PORT || 3000;

app.listen(port , ()=>{
       console.log("server started at port"+port);
});

