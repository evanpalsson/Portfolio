var express = require('express');
var app = express();
var http = require('http').Server(app);
var oandaAdapter = require('oanda-adapter');
var fs = require('fs');
var path = require('path');
var request = require('request');
var io = require('socket.io');

//start api
url = 'https://www.quandl.com/api/v1/datasets/SEC/AAPL_ASSETS_Q.json';

request(url, function(error, response, body){
	console.log(body);
});

//serve files
app.use(express.static(__dirname + '/public'));

app.listen(1337);
console.log('1337 is working'); 

//oanda stream
// io.on('connection', function(socket){
// 	socket.on('pair', function(symbol){
// 		// console.log(symbol)
// 		switch(symbol){
// 			case 'EUR/USD':
// 				pair1 = 'EUR'
// 				pair2 = 'USD'
// 				break;
// 			case 'GBP/USD':
// 				pair1 = 'GBP'
// 				pair2 = 'USD'
// 				break;
// 			case 'USD/JPY':
// 				pair1 = 'USD'
// 				pair2 = 'JPY'
// 				break;
// 			case 'USD/CHF':
// 				pair1 = 'USD'
// 				pair2 = 'CHF'
// 				break;
// 		};
// 		startOanda()
// 	});

// 	var pair1 = 'GBP';
// 	var pair2 = 'USD';

// 	var startOanda = function(){
// 		var client = new oandaAdapter({
// 			environment: 'practice',
// 			accessToken: '2be9ee51eb8a151263af2089ac7713a3-cff26104998f7f05e669d104e9f2e857'
// 		});
// 		client.subscribePrice('8108490', pair1+'_'+pair2, function(tick){
// 			console.log(tick.ask);
// 			socket.emit('price', tick);     //this is to emit the data to the front end
// 		}, this);
// 	}
// 	console.log('user connected');
// });

// io.on('disconnect', function(socket){
// 	socket.disconnect()

// });