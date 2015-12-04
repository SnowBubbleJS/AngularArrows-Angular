angular
  .module('app')
  .controller('appController', myTextArea);

function myTextArea($scope) {
  $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'javascript',
  };
}
