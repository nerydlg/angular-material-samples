
var menuService = function ($q){
	this.menuItems = [
		{
			text: 'Users',
			icon: 'users'
		},
		{
			text: 'Permissions',
			icon: 'settings'
		},
		{
			text: 'Blog',
			icon: 'blog'
		},
		{
			text: 'Templates',
			icon: 'dashboard'
		}
	];

	this.loadAllMenuItems = function(){
		return $q(function(resolve, reject){
			resolve(this.menuItems);
		});
	}
};



angular.module('easyBuilder').service('menuService', menuService);