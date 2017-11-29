var bodyParser = require('body-parser');
var request = require('request-promise');
var scrape = require('html-metadata');
var fs = require('fs');
var url = require('url');

var url_path = "https://ponyfoo.com";

var urlencodedParser = bodyParser.urlencoded({extended:false});

//static get, post, delete function from temporary Object data
module.exports = function(app){

app.get('/', (req,res)=>{

    request({
        method: 'GET',
        url: url_path,
        json: true,

      }).then(data=>{
       // console.log(data);
        fs.writeFileSync('./controllers/delta.json', JSON.stringify(data), 'utf-8');
            res.json(data);
          });
});

app.get('/index/', (req,res)=>{

  var q = url.parse(req.url, true).query;
  var path = q.url;

    request({
          method: 'GET',
          url: path,
          json: true,
          }).then(data=>{
              fs.writeFileSync('./controllers/new.json', JSON.stringify(data), 'utf-8');
              res.json(data);
          });
  });

  //scrape method used to get url metadata (hided for future use)

// app.get('/meta', function(req,res){
//   scrape(url1).then(function(metadata){
//     console.log(metadata);
//     res.render('meta', {value:metadata});
//   });
// });

} //module.exports function ended
