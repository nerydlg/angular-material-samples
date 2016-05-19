angular.module('easyBuilder').controller('dashboardController', function($scope, $mdSidenav, $timeout){
	$scope.openLeftMenu = buildDelayedToggle('menuLeft');

	function debounce(func, wait, context){
		var timer;
		return function debounced() {
			var context = $scope,
				args	= Array.prototype.slice.call(arguments);
			$timeout.cancel(timer);	
			$timeout(function() {
				timer = undefined;
				func.apply(context, args);
			}, wait || 10);
		};
	}

	function buildDelayedToggle(navId) {
		return debounce(function(){
			$mdSidenav(navId)
				.toggle();
		}, 200);
	}
});