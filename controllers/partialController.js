angular
  .module('app')
  .controller('partialController', myTextArea);

function myTextArea($scope) {
  $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'xml',
  };
}
