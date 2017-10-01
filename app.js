var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var route = require('./route.js');

var app = express();
const port = 3000;

//connect to mongo db

mongoose.connect('mongodb://localhost:27017/contactlist');

mongoose.connection.on('connected',(err)=>{
if(err){
    console.log(err);
  }

  console.log('connected to database');
});

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/api',route);
app.listen(port,()=>{


  console.log("server started at port 3000");
});
