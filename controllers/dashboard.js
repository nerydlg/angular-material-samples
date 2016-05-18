angular.module('easyBuilder').controller('dashboardController', function($scope, $mdSidenav){
	$scope.openLeftMenu = function(){
		$mdSidenav('menuLeft').toggle();
	}
});