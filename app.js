import routerUser from './register.js';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
//const express = require("express");
const app = express();
//const path=require('path');

/* var sql = require('mssql');
var config = {
    connectionString :''
} */


const router = express.Router();
const __dirname = path.resolve(path.dirname(''));

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

router.get('/register' , function(req,res) {
    res.sendFile(__dirname+'/register.html');
});  


/* app.use('/' , router);
app.listen(process.env.port || 1234); */

/* router.get('/', function(req,res){
    res.redirect(__dirname+'/index.html')
}); */

app.use(bodyParser.json());
app.use('/' , router);
app.use('/' , routerUser);

app.listen(1234);
console.log('running at port 1234');
/* let port = 12346;
app.listen(port , function(){
    console.log("server listen to port:" + port);
}) */