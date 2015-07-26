var app = angular.module('portfolio');

	app.controller('appCtrl', function($scope, $location){
  	
		$scope.isActive = function(viewLocation) { 
       		return viewLocation === $location.path();
    	};
	});