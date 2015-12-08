angular
  .module('app')
  .controller('partialController', myTextArea);

function myTextArea($scope, output) {
  $scope.editorOptions = {
      readOnly: 'nocursor',
      lineWrapping : true,
      lineNumbers: true,
      mode: 'text/javascript',
  };
  $scope.codemirrorLoaded = function(_editor) {
    _editor.setValue(`
`);
    output.partial = _editor.getValue();
    output.render();
    _editor.on('change', function(inst, changes) {
      output.partial = _editor.getValue();
      output.render();
    });
  };
}
