var express = require('express');
var bodyParser = require('body-parser');
var todocontroller = require('./controllers/mongodb');

var app = express();

//initialize template engine
app.set('view engine', 'ejs');

//setting static file
app.use(express.static('./public'));

//Declaring middleware body-parser
var urlencodedParser = bodyParser.urlencoded({extended:false});

//fire function
todocontroller(app);    // todo controller file call funtion

app.listen(5000);
console.log('Your app running port 5000');
