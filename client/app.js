var app = angular.module('app', [

])
.controller('todoCtrl', function($scope) {
  $scope.todos = [];

  $scope.addTodo = function() {
    $scope.todos.push({text: $scope.todoInput, done: false});
    $scope.todoInput = "";
  };

  $scope.removeTodo = function(){

    var oldList = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldList, function(todo) {
      if(!todo.done) $scope.todos.push(todo);
    });
  };
});
