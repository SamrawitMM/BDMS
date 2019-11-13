var express = require('express');
var bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');
var { mongoose } = require('./db/mongoose');
var { Hospital } = require('./models/Hospital');
var { Donator } = require('./models/Donator');
var { User } = require('./models/user');
var { Blood } = require('./models/Blood');
var { Request } = require('./models/Request');

const port = process.env.PORT || 3002;

var app = express();
// const server = http.createServer(app);
// const io = socketIO(server);
// io.on('connection',socket=>{
//     console.log('User connected')
//     socket.on('disconnect',()=>{
//         console.log('user disconnected')
//     })
// })

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
})

app.use(bodyParser.json());



app.post('/addUser', (req, res) => {
    console.log(req.body);
    console.log("username ", req.body.username)
    console.log("I am here");
    var user = new User({
        // username: req.body.username,
        // password:req.body.password,
        // firstname:req.body.firstname,
        // lastname:req.body.lastname,
        // email:req.body.email,
        // role:req.body.role
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        role: req.body.role

    });
    user.save().then((doc) => {
        res.send(doc);
        // console.log(doc)
    }, (e) => {
        res.send(e);
        // console.log(e);
    })
})
app.post('/blood', (req, res) => {
    console.log('here in blood');
    // var blood = new Blood({
    //     bloodID:'BLO/3233/98',
    //     bloodType: 'O',
    //     donatorId:'DON/1243/89',
    //     distributed:true
    // });
    // blood.save().then((doc)=>{
    // res.send(doc);
    // console.log(doc);
    // },(e)=>{
    // res.send(e);
    // console.log(e);
    // });
})
app.post('/request', (req, res) => {
    let request = new Request({
        quantity: req.body.quantity,
        bloodType: req.body.bloodType,
        completed:false,
        requestTime:Date.now(),
        requesterID:'reqa/2323/23',
        requestID:'client/2443/78'

    })
    request.save().then(docs => {
        res.send(docs)
    }, e => {
        res.send(e);
    })

})
app.get('/requests', (req, res) => {
    Request.find({ completed: false }).then(
        (requests) => {
            res.send({ requests })
        }
    ).catch((err) => {
        res.send(err)
    })
})
app.post('/users', (req, res) => {
    console.log(req);
    var usernameI = req.body.username;
    var firstnameI = req.body.firstname;
    // var usernameI = 'Tsiyon';
    // var firstnameI = 'Tsiyon'
    User.find({ username: usernameI }).then(
        (user) => {
            console.log(usernameI)
            res.send({
                user
            })
        }
    )
})
app.get('/userss', (req, res) => {
    User.find().then(
        (user) => {
            console.log('got users')
            res.send(
                { user }
            )
        }
    )
})
// app.post('/department',(req,res)=>{
//     var departmentname = req.body.nameofdept;
//     Department.insertMany({"nameofdepartment":departmentname},
//     (err,result)=>{
//         if(err){
//             res.send({Error:"unable to insert"})
//         }else{
//             res.send(JSON.stringify(result))
//         }
//     }
//     )

// });
// app.post('/adduser',(req,res)=>{
//     // var usernameI; 
//     // var passwordI;
//     // var firstnameI;
//     // var lastnameI;
//     // var age;
//     // var role;
//     // var department;
//     // var 
// })
app.get('/users', (req, res) => {
    User.find().then((users) => {
        console.log(users)
        res.send({
            users,

        });
    }, (e) => {
        res.status(400).send(e);
    })
})



// app.get('todos/:id',(req,res)=>{
//     //req.send(req.params);
//     //var id=req.params.id;
// })






app.listen(port, () => {
    console.log('Started on port 3002');
})