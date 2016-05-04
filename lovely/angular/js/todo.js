function TodoCtrl($scope) {
	$scope.editedItem = null;
	$scope.todos = [
		{id:1,text:"完成此任务",done:false,time:getNowTime(),weight:1},
		{id:2,text:"学习Angular",done:false,time:getNowTime(),weight:3}
	];
	
	$scope.addTodo = function() {
		$scope.todos.push({id:$scope.todos.length+1, text:$scope.todoText, done:false, time:getNowTime(),weight:4,progress:0});
		$scope.todoText = '';
	};

	$scope.count = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	};

	$scope.hasItem = function(){
		return $scope.todos.length > 0;
	}

	$scope.removeTodo = function(todo){
		$scope.todos.splice($scope.todos.indexOf(todo), 1);
	};
  
	$scope.startEditing = function(todo){
		todo.editing = true;
		$scope.editedItem = todo;
	};
  
	$scope.doneEditing = function(todo){
		todo.editing=false;
		$scope.editedItem = null;
	};

	$scope.doneAll = function(){
		angular.forEach($scope.todos,function(todo){
			todo.done = $scope.isDoneAll;
		});
	};
	
	$scope.archive = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo) {
			if (!todo.done) $scope.todos.push(todo);
		});
	};
}

var todos = angular.module('todos', []);

todos.directive('ngBlur', function() {
	return function( scope, elem, attrs ) {
		elem.bind('blur', function() {
			scope.$apply(attrs.ngBlur);
		});
	};
});

todos.directive('ngFocus', function( $timeout ) {
	return function( scope, elem, attrs ) {
		scope.$watch(attrs.ngFocus, function( newval ) {
			if ( newval ) {
				$timeout(function() {
					elem[0].focus();
				},0, false);
			}
		});
	};
});

function getNowTime(){
	return new Date().toLocaleTimeString()
}
