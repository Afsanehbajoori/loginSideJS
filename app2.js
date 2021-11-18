const express = require('express');
const app = express();
const admin = express();
app.get('/' , function(req,res){
    console.log(admin.mountpath);
    res.send('Helloo')
});

app.use('/admin' , admin);
app.listen(3000); 