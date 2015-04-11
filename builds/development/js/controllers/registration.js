myApp.controller('RegistrationController', function($scope, $location, $firebaseAuth, Authentication){

	var ref = new Firebase('https://angdatatut.firebaseio.com');
	var auth = $firebaseAuth(ref);


	$scope.login = function(){
	Authentication.login($scope.user)
	.then(function(user){
		$location.path('/meetings');
	}).catch(function(error){
		console.log('Fuck off you filthy hacker!');
		$scope.message = error.message;
	});	
		
		
	};

	$scope.register = function(){	
		$location.path('/meetings');
	};
}); 