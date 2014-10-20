'use strict';

/**
 * @ngdoc function
 * @name sample4AngularjsEclipseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sample4AngularjsEclipseApp
 */
angular.module('sample4AngularjsEclipseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
