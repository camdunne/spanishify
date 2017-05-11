var app = angular.module('app.todo', [

])
.controller('todoCtrl', ["$scope", "$http",
 function($scope, $http) {
  $scope.todos = [];
  $scope.deleteTodos = [];
  $scope.toggle = true;

  $scope.$watch('toggle', function(){
    $scope.toggleText = $scope.toggle ? 'Inglesify' : "Spanishify"
  })

  $scope.loadTodo = function() {
    $http({
      method: 'GET',
      url: '/todo'
    }).then(function(data){
      $scope.todos = data.data;
    })
  };

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
          $scope.todos.push(data.data)
          // $scope.todos.push({text: data.data.translationText.toLowerCase(), original: $scope.todoInput, done: false});
          $scope.todoInput = "";
          console.log($scope.todos)
        },
          function(error) { console.log("error", error) })

    }
  };
  $scope.removeTodo = function(array) {
    console.log(array)
    $http({
      method: 'POST',
      url: '/delete',
      data : array
    }).then(function(data){
      $scope.loadTodo();
      $scope.deleteTodos = [];
    })

  };

}]);
