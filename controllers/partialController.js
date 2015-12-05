angular
  .module('app')
  .controller('partialController', myTextArea);

function myTextArea($scope, output) {
  $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'xml',
  };
  $scope.codemirrorLoaded = function(_editor) {
    _editor.setValue('<div>Partial</div>');
    output.partial = _editor.getValue();
    output.render();
    _editor.on('change', function(inst, changes) {
      output.partial = _editor.getValue();
      output.render();
    });
  };
}
