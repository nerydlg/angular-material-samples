var app = angular.module( 'easyBuilder', [ 'ngMaterial', 'ngMessages'] ).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  		.primaryPalette('indigo')
  		.accentPalette('cyan');
});