var myApp = angular.module('myApp');

myApp.controller('ExpositoresController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('ExpositoresController loaded...');

	$scope.getExpositores = function(){
		$http.get('/api/expositores').success(function(response){
			$scope.expositores = response;
		});
	}

	$scope.getExpositor = function(){
		var id = $routeParams.id;
		$http.get('/api/expositores/'+id).success(function(response){
			$scope.expositor = response;
		});
	}

	$scope.addExpositor = function(){
		console.log($scope.expositor);
		$http.post('/api/expositores/', $scope.expositor).success(function(response){
			window.location.href='#/expositores';
		});
	}

	$scope.updateExpositor = function(){
		var id = $routeParams.id;
		$http.put('/api/expositores/'+id, $scope.expositor).success(function(response){
			window.location.href='#/expositores';
		});
	}

	$scope.removeExpositor = function(id){
		$http.delete('/api/expositores/'+id).success(function(response){
			window.location.href='#/expositores';
		});
	}
}]);