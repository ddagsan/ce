(function (angular) {
    'use strict'
    var app = angular.module('myApp', ['ngRoute', 'indexControllers', 'ngAnimate']);

    app.config(['$routeProvider', '$compileProvider',
      function ($routeProvider, $compileProvider) {
          $routeProvider.
          when('/test1', {
              templateUrl: '../views/test1.html',
              controller: 'indexController'
          }).
          when('/test2', {
              templateUrl: '../views/test2.html',
              controller: 'indexController'
          }).
          when('/menu', {
              templateUrl: '../views/menu.html',
              controller: 'menuController'
          }).
          when('/md5hash', {
              templateUrl: '../views/md5hash.html',
              controller: 'md5Controller'
          }).
          when('/guid', {
              templateUrl: '../views/getguid.html',
              controller: 'guidController'
          }).
          otherwise({
              redirectTo: '/menu'
          });

          $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
          // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
      }]);
})(window.angular);