const express = require("express")
const app = express();
const path=require('path');
const router = express.Router();


router.get('/index' , function(req,res){
    res.sendFile(path.join(__dirname+'index.html'));
    // res.send('index.html');
});

router.get('/next' , function(req,res){
    res.sendFile(path.join(__dirname+'next.html'));
});

app.use('/' , router);
app.listen(process.env.port || 1234);

console.log('running at port 1234');
/* let port = 12346;
app.listen(port , function(){
    console.log("server listen to port:" + port);
}) */