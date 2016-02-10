// Code goes here
(function(){
	'use strict';

	angular
	.module('app')
	.directive('bootstrapBtn', bootstrapBtn);

	function bootstrapBtn(){
		return{
			restrict: 'E',
			replace: true,
			template: '<button type="button" ng-class="test" class="btn" ng-click="add(1)">{{color}}</button>',
			link: function (scope, elem, attrs) {

				scope.counter = 0;
				scope.test = "btn-defalult";
				scope.color = "default";

				scope.add = function(inc){
					scope.counter += inc;
					switch(scope.counter){
						case 1:
							scope.test ="btn-danger";
							scope.color ="danger"; 
							break

						case 2:							
							scope.test ="btn-success";
							scope.color="success";
							break

						case 3:						
							scope.test ="btn-warning";
							scope.color="warning";
							break

						case 4:						
							scope.test ="btn-info";
							scope.color="info";
							break

						case 5:						
							scope.test ="btn-primary";
							scope.color="primary";
							break

						default:
							if(scope.counter > 4){
								scope.test = "btn-defalult";
								scope.color="default";
								scope.counter = 0;
						}
							break

					}
				};
			}
		}
	};
}());