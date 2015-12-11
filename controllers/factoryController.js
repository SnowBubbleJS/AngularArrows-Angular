angular
  .module('app')
  .controller('factoryController', factoryController);

function factoryController($scope, output) {

  $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'text/javascript',
  };
  $scope.codemirrorLoaded = function(_editor) {
    _editor.setValue();
    output.factory = _editor.getValue();
    output.render();
    _editor.on('change', function(inst, changes) {
      output.factory = _editor.getValue();
      output.render();
    });
  };
}
