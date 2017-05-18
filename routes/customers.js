var express = require('express')
var app = express()
var http = require('http')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
	getAccessToken(function(data) {
    	console.log(data);
    res.json(data);
  });

});


// var signup = function(signupData, callbackData) {

//   var data = '{ "username":"dark","password":"hacked@2016" }';

//   var options = {
//     host: 'localhost',
//     port: 80,
//     path: '/magento_dir/index.php/rest/V1/integration/admin/token',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Content-Length': Buffer.byteLength(data)
//     }
//   };

//   var sendBack = "";
//   var reqHTTP = http.request(options, function(res) {
//     console.log('STATUS: ' + res.statusCode);
//     console.log('HEADERS: ' + JSON.stringify(res.headers));
//     res.setEncoding('utf8');
//     res.on('data', function (chunk) {
//       // console.log('BODY: ' + chunk);
//       sendBack += chunk;
//     });
//     res.on("end", function () {
//       callbackData(sendBack);
//     });
//   });
//   reqHTTP.write(data);
//   reqHTTP.end();

// };


var getAccessToken = function(callbackData) {

  var data = '{ "username":"dark","password":"hacked@2016" }';

  var options = {
    host: 'localhost',
    port: 80,
    path: '/magento_dir/index.php/rest/V1/integration/admin/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  var sendBack = "";
  var reqHTTP = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      // console.log('BODY: ' + chunk);
      sendBack += chunk;
    });
    res.on("end", function () {
      callbackData(sendBack);
    });
  });
  reqHTTP.write(data);
  reqHTTP.end();
};

module.exports = router;