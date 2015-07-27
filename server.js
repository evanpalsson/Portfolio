var express = require('express');
var app = express();
var http = require('http').Server(app);
var oandaAdapter = require('oanda-adapter');
var fs = require('fs');
var path = require('path');
var request = require('request');

	//start quandl api

// url = 'https://www.quandl.com/api/v1/datasets/SEC/AAPL_ASSETS_Q.json';

// request(url, function(error, response, body){
// 	console.log(body);
// });

	//end quandl api

//serve files
app.use(express.static(__dirname + '/public'));

app.listen(1337);
console.log('server working'); 
