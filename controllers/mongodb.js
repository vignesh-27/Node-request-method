var bodyParser = require('body-parser');
var request = require('request-promise');
var scrape = require('html-metadata');

var url = "https://ponyfoo.com";

var urlencodedParser = bodyParser.urlencoded({extended:false});

//static get, post, delete function from temporary Object data
module.exports = function(app){

app.get('/', function(req,res){

     request({
        method: 'GET',
        url: url,
        json: true,

     }).then((data)=>{
      res.send(data);
     });
 });

app.get('/meta', function(req,res){
  scrape(url).then(function(metadata){
    console.log(metadata);
    res.send(metadata);
  });
});

} //module.exports function ended