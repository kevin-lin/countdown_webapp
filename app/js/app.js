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
  $routeProvider.when('/aced6dedd8203df3cb3d81f46c263fd71b7b3e48', {templateUrl: 'partials/people/example.html', controller: 'userCtrl'});
  $routeProvider.when('/bf5ce6bca1837184b86a1fb332edb735665ca1ed', {templateUrl: 'partials/people/PsymonLee.html', controller: 'userCtrl'});
  $routeProvider.when('/c30635fb61378918ac1a7c5feb2a819a5a6bcfac', {templateUrl: 'partials/people/MarisaJones.html', controller: 'userCtrl'});
  $routeProvider.when('/0ccc9bc1bb63ccc1f2123272def4a1963c2b60e5', {templateUrl: 'partials/people/GraceHugh.html', controller: 'userCtrl'});
  $routeProvider.when('/388a751a4594df57a123a6dee41a01aeaec1ea85', {templateUrl: 'partials/people/AndrewTuntivatingorn.html', controller: 'userCtrl'});
  $routeProvider.when('/88dc38e029c5ff35ed3f103faca7ec14e7d77073', {templateUrl: 'partials/people/YusukeIwase.html', controller: 'userCtrl'});
  $routeProvider.when('/d869b04564bc4b4c6adcf3ad6f00e45c1150bc41', {templateUrl: 'partials/people/ChristineChu.html', controller: 'userCtrl'});
  $routeProvider.when('/2b49475b756c73b0e99567b8d1a49db2056e720d', {templateUrl: 'partials/people/JulieWu.html', controller: 'userCtrl'});
  $routeProvider.when('/3e11fda4b1c58ea4bc6b608c03913c5b3d7fbde7', {templateUrl: 'partials/people/KathleenUncad.html', controller: 'userCtrl'});
  $routeProvider.when('/3bea5605bb2b45f32b4727f387e08ba62abae649', {templateUrl: 'partials/people/NhuVu.html', controller: 'userCtrl'});
  $routeProvider.when('/43acf5939bbb1c5ebc69fe9c0bdf9e60804a19ea', {templateUrl: 'partials/people/BethCrafton.html', controller: 'userCtrl'});
  $routeProvider.when('/b4b45b6be6f1b02ea91f697172f0a4d15382179f', {templateUrl: 'partials/people/StevenNguyen.html', controller: 'userCtrl'});
  $routeProvider.when('/54af387e7d3afd5d3a611439346f1b01052e8672', {templateUrl: 'partials/people/SangHam.html', controller: 'userCtrl'});
  $routeProvider.when('/64ae02701b7beecfdb6166cf4b5cfdfa88eb4093', {templateUrl: 'partials/people/NahomyLara.html', controller: 'userCtrl'});
  $routeProvider.when('/6ff5d68e00cfc4b29b59410be5bde956a0be57e6', {templateUrl: 'partials/people/JorgeTrevino.html', controller: 'userCtrl'});
  $routeProvider.when('/43d60345ae3f2031295d0a3f306a70c0979583e2', {templateUrl: 'partials/people/JulioRoman.html', controller: 'userCtrl'});
  $routeProvider.when('/ca9e2b8a166c934128e2317f05bf86a580fd6200', {templateUrl: 'partials/people/TammyTrinh.html', controller: 'userCtrl'});
  $routeProvider.when('/81e7615d13b0e6397430bfbf17769db2b9d176e2', {templateUrl: 'partials/people/JosephLe.html', controller: 'userCtrl'});
  $routeProvider.when('/373d74e719dc6416fd59471db26f635e6ff1622b', {templateUrl: 'partials/people/RachaelNa.html', controller: 'userCtrl'});
  $routeProvider.when('/72734cce1ac2a2791a260652781f6a9186011e3c', {templateUrl: 'partials/people/JennyTsai.html', controller: 'userCtrl'});
  $routeProvider.when('/1fec9b8dd175d565a1e9d143698e908f58a7fb1e', {templateUrl: 'partials/people/BillingsEverts.html', controller: 'userCtrl'});
  $routeProvider.when('/9c6b5171d4c6f4a1959f21ee1c008be6edd4fa9a', {templateUrl: 'partials/people/JoyMong.html', controller: 'userCtrl'});
  $routeProvider.when('/ad20fb46a7d675254f5132de407c672da8999876', {templateUrl: 'partials/people/JustinWong.html', controller: 'userCtrl'});
  $routeProvider.when('/541f30554e2caa245dbe67fc4a03cb8c01a23c1a', {templateUrl: 'partials/people/SharonYu.html', controller: 'userCtrl'});
  $routeProvider.otherwise({templateUrl: 'partials/people/default.html', controller: 'userCtrl'});
}]);
