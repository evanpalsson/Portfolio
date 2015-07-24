var app = angular.module('portfolio', ['ngRoute']);

	app.config(function($routeProvider){

	$routeProvider
	  	.when('/', {
	  		templateUrl: './chart.html',
	  		controller: 'chartCtrl'	
	  	})
	  	.when('/svg', {
	  		templateUrl: './main.html',
	  		controller: 'homeCtrl'	
	  	})
	  	.when('/chart', {
	  		templateUrl: './chart.html',
	  		controller: 'chartCtrl'	
	  	})
	  	.otherwise({
	  		redirectTo: '/'
	  	})




	});