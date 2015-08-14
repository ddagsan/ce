(function (angular) {
    'use strict'
    var app = angular.module('myApp', ['ngRoute', 'indexControllers', 'ngAnimate']);

    app.config(['$routeProvider',
      function ($routeProvider) {
          $routeProvider.
          when('/test1', {
              templateUrl: '../views/test1.html',
              controller: 'indexController'
          }).
          when('/test2', {
              templateUrl: '../views/test2.html',
              controller: 'indexController'
          }).
          otherwise({
              redirectTo: '/test1'
          });
      }]);
})(window.angular);