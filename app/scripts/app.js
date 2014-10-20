'use strict';

/**
 * @ngdoc overview
 * @name sample4AngularjsEclipseApp
 * @description
 * # sample4AngularjsEclipseApp
 *
 * Main module of the application.
 */
angular
  .module('sample4AngularjsEclipseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
