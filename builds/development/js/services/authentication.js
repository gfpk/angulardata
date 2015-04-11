myApp.factory('Authentication', function($firebase, $firebaseAuth, $routeParams, $location, FIREBASE_URL){

	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);

	var myObject = {

		login: function(user){
			return auth.$authWithPassword({
				email: user.email,
				password: user.password
			});

		}

	};

	return myObject
});