myApp.factory('CountMeetings', function($firebase, $rootScope, FIREBASE_URL){

	var ref = new Firebase(FIREBASE_URL+'/users/'+$rootScope.currentUser.$id+'/meetings');
	var meetingsInfo = $firebase(ref);
	var meetingsArray = meetingsInfo.$asArray();

	meetingsArray.$loaded().then(function(data){
		$rootScope.meetingsCount = meetingsArray.length;
	});

	meetingsArray.$watch(function(data){
		$rootScope.meetingsCount = meetingsArray.length;
	});

	return true;
});