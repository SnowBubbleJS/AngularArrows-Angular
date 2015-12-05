angular
  .module('app')
  .controller('appController', myTextArea);

function myTextArea($scope, output) {
  $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'text/javascript',
  };
  $scope.codemirrorLoaded = function(_editor) {
    _editor.setValue(`angular
      .module('myApp', ['ui.router'])
      .config(configFunction);

    function configFunction($stateProvider, $urlRouterProvider) {
    }
`);
    output.app = _editor.getValue();
    output.render();
    _editor.on('change', function(inst, changes) {
      output.app = _editor.getValue();
      output.render();
    });
  };
}
