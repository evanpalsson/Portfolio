var app = angular.module('portfolio', ['ngRoute']);

	app.config(function($routeProvider){

	$routeProvider
	  	.when('/', {
	  		templateUrl: './main.html',
	  		controller: 'homeCtrl'	
	  	})
	  	.when('/chart', {
	  		templateUrl: './views/chart.html',
	  		controller: 'chartCtrl'	
	  	})
	  	.otherwise({
	  		redirectTo: '/'
	  	})




	});