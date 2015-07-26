var app = angular.module('portfolio', ['ngRoute']);

	app.config(function($routeProvider){

		$routeProvider
		  	.when('/', {
		  		templateUrl: './main.html'
		  		// controller:	'mainCtrl'
		  	})
		  	.when('/svg', {
		  		templateUrl: './svg.html',
		  		controller: 'svgCtrl'	
		  	})
		  	.when('/chart', {
		  		templateUrl: './chart.html'
		  		// controller: 'chartCtrl'	
		  	})
		  	.otherwise({
		  		redirectTo: '/'
		  	})
	});

	


  	



