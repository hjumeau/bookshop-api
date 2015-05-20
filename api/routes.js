var express = require('express');
var http = require('http');

var router = express.Router();

module.exports = router;

var base = 'http://henri-potier.xebia.fr/books/';

router.get('/-books', function(req, res) {

  var send = function(apiResponse) {
    var buf = '';
    console.log("Got response: " + apiResponse.statusCode);
    
    apiResponse.on('data', function(chunk) {
      buf += chunk;
    });
    apiResponse.on('end', function() {
      var result = JSON.parse(buf);
      res.send(result);
    });
  };

  http.get(base, send).on('error', function(e) {
    console.log("Got error: " + e.message);
  });   
});

router.get('/-offers/:isbns', function(req, res) {

  var path = base + req.params.isbns.replace(/'/g, '') + '/commercialOffers';
  console.log(path);
  var send = function(apiResponse) {
    var buf = '';
    console.log("Got response: " + apiResponse.statusCode);
    
    apiResponse.on('data', function(chunk) {
      buf += chunk;
    });
    apiResponse.on('end', function() {
      var result = JSON.parse(buf);
      res.send(result);
    });
  };

  http.get(path, send).on('error', function(e) {
    console.log("Got error: " + e.message);
  });   
});
