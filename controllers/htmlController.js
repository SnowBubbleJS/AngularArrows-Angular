angular
  .module('app')
  .controller('htmlController', myTextArea);

function myTextArea($scope, output) {
  $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'xml',
  };
  $scope.codemirrorLoaded = function(_editor) {
    output.html = _editor.getValue();
    output.render();
    _editor.on('change', function(inst, changes) {
      output.html = _editor.getValue();
      //console.log(output.html);
      lineFunction('.cm-string:contains(myController)');
      output.render();
    });
  };
}
