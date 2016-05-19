angular.module('easyBuilder').controller('dashboardController', dashboardController);

function dashboardController($scope, $mdSidenav, $timeout, menuService){
	$scope.openLeftMenu = buildDelayedToggle('menuLeft');
	var self = this;
	self.menu = [];

	menuService.loadAllMenuItems()
			   .then(function(items){
			   		self.menu = items;
			   });

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
}