app.directive('navbarDirective', function(){
	console.log('aaaaaaaa');
	return {
	    restrict: 'E',
	    replace: true,
	    transclude: true,
	    scope: true,
	    templateUrl: '/views/templates/navbar.html',
	    controller: function($scope, $element, $location){
	        $scope.isActive = function(viewLocation){

	            var active = false;

	            if(viewLocation === $location.path()){
	                active = true;
	            }

	            return active;

	        }
	    }
	}
});