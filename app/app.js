(function(){
	'use strict';

	angular
		.module('app', ['ui.router'])
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider
			.state('/', {
					abstract: true,
					url: "/home",
					templateUrl:"../index.html"
			})
			.state('btn', {
					url: "/btn",
					templateUrl:"../app/items/button-class-switcher.html"
			});
		}]);
}());