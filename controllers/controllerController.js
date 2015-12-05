angular
  .module('app')
  .controller('controllerController', myTextArea);

function myTextArea($scope, output) {
  $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'text/javascript',
  };
  $scope.codemirrorLoaded = function(_editor) {
    _editor.setValue(`angular
      .module('myApp', [])
      .controller('myController', myController);

    function myController($scope) {
      console.log('hereeee');
      $scope.name = "Bryan";
      $scope.movie = "";
      $scope.info = 'hi';
    }
`);
    output.controller = _editor.getValue();
    output.render();
    _editor.on('change', function(inst, changes) {
      output.controller = _editor.getValue();
      output.render();
    });
  };
}
