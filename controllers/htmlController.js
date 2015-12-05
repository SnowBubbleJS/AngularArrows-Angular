angular
  .module('app')
  .controller('htmlController', myTextArea);

function myTextArea($scope) {
  $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'xml',
  };
  $scope.codemirrorLoaded = function(_editor) {
    _editor.setValue('<div>HTML</div>');
    _editor.on('change', function(inst, changes) {
      console.log(inst);
      console.log(_editor.getValue());
    });
  };
}
