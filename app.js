const express = require("express")
let app = new express();

app.get('/index' , function(req,res){
    res.send('index.html');
})

app.get('/next' , function(req,res){
    res.send('next.html');
})

let port = 12346;
app.listen(port , function(){
    console.log("server listen to port:" + port);
})