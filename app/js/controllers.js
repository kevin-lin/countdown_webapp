'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('userCtrl', ['$scope', '$location', function($scope, $location) {
    if( ('/' + CryptoJS.SHA1(getColorCode())) != $location.path() )
      window.location = "index.html#/";
  }]);
