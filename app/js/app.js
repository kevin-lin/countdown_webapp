'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  // $routeProvider.when('/', {templateUrl: 'partials/color_selector.html', controller: 'userCtrl'});
  $routeProvider.when('/', {templateUrl: 'partials/blank.html', controller: 'userCtrl'});
  $routeProvider.when('/1274', {templateUrl: 'partials/people/1274.html', controller: 'userCtrl'});
  $routeProvider.when('/1327', {templateUrl: 'partials/people/1327.html', controller: 'userCtrl'});
  $routeProvider.when('/1341', {templateUrl: 'partials/people/1341.html', controller: 'userCtrl'});
  $routeProvider.when('/1684', {templateUrl: 'partials/people/1684.html', controller: 'userCtrl'});
  $routeProvider.when('/1754', {templateUrl: 'partials/people/1754.html', controller: 'userCtrl'});
  $routeProvider.when('/2168', {templateUrl: 'partials/people/2168.html', controller: 'userCtrl'});
  $routeProvider.when('/2516', {templateUrl: 'partials/people/2516.html', controller: 'userCtrl'});
  $routeProvider.when('/2681', {templateUrl: 'partials/people/2681.html', controller: 'userCtrl'});
  $routeProvider.when('/2812', {templateUrl: 'partials/people/2812.html', controller: 'userCtrl'});
  $routeProvider.when('/3236', {templateUrl: 'partials/people/3236.html', controller: 'userCtrl'});
  $routeProvider.when('/3271', {templateUrl: 'partials/people/3271.html', controller: 'userCtrl'});
  $routeProvider.when('/3543', {templateUrl: 'partials/people/3543.html', controller: 'userCtrl'});
  $routeProvider.when('/3654', {templateUrl: 'partials/people/3654.html', controller: 'userCtrl'});
  $routeProvider.when('/4226', {templateUrl: 'partials/people/4226.html', controller: 'userCtrl'});
  $routeProvider.when('/4486', {templateUrl: 'partials/people/4486.html', controller: 'userCtrl'});
  $routeProvider.when('/4668', {templateUrl: 'partials/people/4668.html', controller: 'userCtrl'});
  $routeProvider.when('/4864', {templateUrl: 'partials/people/4864.html', controller: 'userCtrl'});
  $routeProvider.when('/5142', {templateUrl: 'partials/people/5142.html', controller: 'userCtrl'});
  $routeProvider.when('/5622', {templateUrl: 'partials/people/5622.html', controller: 'userCtrl'});
  $routeProvider.when('/5886', {templateUrl: 'partials/people/5886.html', controller: 'userCtrl'});
  $routeProvider.when('/6165', {templateUrl: 'partials/people/6165.html', controller: 'userCtrl'});
  $routeProvider.when('/6735', {templateUrl: 'partials/people/6735.html', controller: 'userCtrl'});
  $routeProvider.otherwise({templateUrl: 'partials/people/default.html', controller: 'userCtrl'});
}]);
