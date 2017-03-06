var app = angular.module('app.todo', [

])
.controller('todoCtrl', function($scope) {
  $scope.todos = [];

  $scope.addTodo = function() {
    if($scope.todoInput !== ""){
        $scope.todos.push({text: $scope.todoInput, done: false});
        $scope.todoInput = "";
    }
  };

  $scope.removeTodo = function(){

    var oldList = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldList, function(todo) {
      if(!todo.done) $scope.todos.push(todo);
    });
  };
});
