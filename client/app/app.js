var app = angular.module('app', [

])
.controller('todoCtrl', function($scope) {
  $scope.todoList = [{todoText: 'Clean House', done:false}];

  $scope.add = function() {
    $scope.todoList.push({todoText:$scope.todoInput, done:false});
    $scope.todoInput = "";
  };

  $scope.remove = function(){
    var oldList = $scioe.todoList;
    $scope.todoList = [];
    angular.forEach(oldList, function(item) {
      if(!item.done) $scope.todoList.push(item);
    });
  };
});

module.export=app;
