angular
  .module('app')
  .controller('appController', myTextArea);

function myTextArea($scope) {
  $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'javascript',
  };
  $scope.codemirrorLoaded = function(_editor) {
    _editor.setValue('APP');
    _editor.on('change', function(inst, changes) {
      console.log(inst);
      console.log(_editor.getValue());
    });
  };
}
