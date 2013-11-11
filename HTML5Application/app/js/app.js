'use strict';
//1403 change added logger
// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  //start of routeprovider
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/view4', {templateUrl: 'partials/partial4.html', controller: 'MyCtrl2'});
  $routeProvider.when('/view3', {templateUrl: 'partials/partial3.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
  //end of routings..
  //dp793b added these changes
}]);
