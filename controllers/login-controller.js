angular.module('easyBuilder').controller('loginController', function($scope, $http){
	$scope.loginImgxs = 'resources/img/login-xs.jpg';

	$scope.submitLogin = function(form){
		var frm = angular.element(form);
		frm.submit();
	};
});