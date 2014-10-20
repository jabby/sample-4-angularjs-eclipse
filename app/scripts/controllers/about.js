'use strict';

/**
 * @ngdoc function
 * @name sample4AngularjsEclipseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sample4AngularjsEclipseApp
 */
angular.module('sample4AngularjsEclipseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
