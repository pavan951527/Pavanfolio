const express = require('express');

const app = express();
const post =  require("./api/models/posts");
const postsData  =  new post();
app.use(express.static('frontend'));
app.use('/uploads' , express.static('uploads'));

app.use((req , res , next)=>{
    res.setHeader("Access-control-Allow-Origin" , "*");
    next();
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/frontend/html/app.html");
})

app.get("/contact",function(req,res){
    res.sendFile(__dirname+"/frontend/html/Contact.html");
})

app.get("/api/posts"  , (req , res)=>{
     res.status(200).send(postsData.get());
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







var port = process.env.PORT || 3000;

app.listen(port , ()=>{
       console.log("server started at port"+port);
});

