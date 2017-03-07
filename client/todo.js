var app = angular.module('app.todo', [

])
.controller('todoCtrl', ["$scope", "$http", "$httpParamSerializer",
 function($scope, $http, $httpParamSerializer) {
  $scope.todos = [];
  $scope.addTodo = function() {
    if($scope.todoInput !== ""){
      $http({
        method: 'POST',
        url: '/todo',
        data: {
          from: "en",
          to: "es",
          text: $scope.todoInput
        }
      })
        .then(function(data){
          console.log("DATA", data.data)
          $scope.todos.push({text: data.data.translationText.toLowerCase(), original: $scope.todoInput, done: false});
          $scope.todoInput = "";
          console.log($scope.todos)
        },
          function(error) { console.log("error", error) })

    }
  };

  $scope.removeTodo = function(){
    var oldList = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldList, function(todo) {
      if(!todo.done) $scope.todos.push(todo);
    });
  };
}]);
