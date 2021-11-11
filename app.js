const express = require("express")
const app = express();
const path=require('path');
const router = express.Router();
//var main = require('./main').main;


router.get('/index' , function(req,res){
    res.sendFile(__dirname+'/index.html');
    // res.send('index.html');
});

router.get('/stylesheet.css' , function(req,res){
    res.sendFile(__dirname+'/stylesheet.css')
});

router.get('/main.js' , function(req,res){
    res.sendFile(__dirname+'/main.js')
});

router.get('/next' , function(req,res){
    res.sendFile(__dirname+'/next.html');
});

/* app.use('/' , router);
app.listen(process.env.port || 1234); */

/*  router.get('/', function(req,res){
    res.redirect(__dirname+'/index.html')
}); */

app.use('/' , router);

app.listen(1234);
console.log('running at port 1234');
/* let port = 12346;
app.listen(port , function(){
    console.log("server listen to port:" + port);
}) */