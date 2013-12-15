'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  // $routeProvider.when('/', {templateUrl: 'partials/color_selector.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/1274', {templateUrl: 'partials/1274.html', controller: 'MyCtrl1'});
  $routeProvider.when('/1327', {templateUrl: 'partials/1327.html', controller: 'MyCtrl1'});
  $routeProvider.when('/1341', {templateUrl: 'partials/1341.html', controller: 'MyCtrl1'});
  $routeProvider.when('/1684', {templateUrl: 'partials/1684.html', controller: 'MyCtrl1'});
  $routeProvider.when('/1754', {templateUrl: 'partials/1754.html', controller: 'MyCtrl1'});
  $routeProvider.when('/2168', {templateUrl: 'partials/2168.html', controller: 'MyCtrl1'});
  $routeProvider.when('/2516', {templateUrl: 'partials/2516.html', controller: 'MyCtrl1'});
  $routeProvider.when('/2681', {templateUrl: 'partials/2681.html', controller: 'MyCtrl1'});
  $routeProvider.when('/2812', {templateUrl: 'partials/2812.html', controller: 'MyCtrl1'});
  $routeProvider.when('/3236', {templateUrl: 'partials/3236.html', controller: 'MyCtrl1'});
  $routeProvider.when('/3271', {templateUrl: 'partials/3271.html', controller: 'MyCtrl1'});
  $routeProvider.when('/3543', {templateUrl: 'partials/3543.html', controller: 'MyCtrl1'});
  $routeProvider.when('/3654', {templateUrl: 'partials/3654.html', controller: 'MyCtrl1'});
  $routeProvider.when('/4226', {templateUrl: 'partials/4226.html', controller: 'MyCtrl1'});
  $routeProvider.when('/4486', {templateUrl: 'partials/4486.html', controller: 'MyCtrl1'});
  $routeProvider.when('/4668', {templateUrl: 'partials/4668.html', controller: 'MyCtrl1'});
  $routeProvider.when('/4864', {templateUrl: 'partials/4864.html', controller: 'MyCtrl1'});
  $routeProvider.when('/5142', {templateUrl: 'partials/5142.html', controller: 'MyCtrl1'});
  $routeProvider.when('/5622', {templateUrl: 'partials/5622.html', controller: 'MyCtrl1'});
  $routeProvider.when('/5886', {templateUrl: 'partials/5886.html', controller: 'MyCtrl1'});
  $routeProvider.when('/6165', {templateUrl: 'partials/6165.html', controller: 'MyCtrl1'});
  $routeProvider.when('/6735', {templateUrl: 'partials/6735.html', controller: 'MyCtrl1'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
