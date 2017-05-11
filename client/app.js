angular.module('app', [
  'app.todo',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/index', {
      templateUrl: './index.html',
      controller: 'todoCtrl'
    });
});
