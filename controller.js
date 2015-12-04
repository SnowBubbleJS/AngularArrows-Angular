angular
  .module('app')
  .controller('myTextArea', myTextArea);

function myTextArea($scope) {
  $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'xml',
  };
}
