var app = angular.module('app', [

])
.controller('todoCtrl', function($scope) {
  $scope.todos = [{text: 'Clean House', done: false}];

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

module.exports = app;
