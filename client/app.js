angular.module('app', [
  'app.todo',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'todoCtrl'
    })
    .otherwise({
      redirectTo: '/links'
    })
})
