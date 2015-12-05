angular
  .module('app')
  .controller('controllerController', myTextArea);

function myTextArea($scope, output) {
  $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'javascript',
  };
  $scope.codemirrorLoaded = function(_editor) {
    _editor.setValue('Controller');
    output.controller = _editor.getValue();
    output.render();
    _editor.on('change', function(inst, changes) {
      output.controller = _editor.getValue();
      output.render();
    });
  };
}
