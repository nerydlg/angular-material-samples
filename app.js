var app = angular.module( 'easyBuilder', [ 'ngMaterial', 'ngMessages'] ).config(function($mdThemingProvider, $mdIconProvider) {
  $mdThemingProvider.theme('default')
  		.primaryPalette('indigo')
  		.accentPalette('cyan');

  $mdIconProvider.icon('menu', 'resources/img/menu-24px.svg', 24);
  $mdIconProvider.icon('settings', 'resources/img/settings-24px.svg', 24);		
});