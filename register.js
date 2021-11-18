import express from 'express';
const routerUser = express.Router();

let users=[
    {
        Name : "Allan" , 
        Username : "alliii",
        password : "user123"
    }
];

routerUser.get('/' , function(req , res) {
    console.log(users);
    res.send(users);
});

routerUser.post('/' , function(req , res) {
    const user = req.body;
    users.push(user);
    res.send(`user ${user.Name} added.`);

});

export default routerUser;
