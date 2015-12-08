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
    _editor.setValue(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Tutorial</title>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js"></script>
  </head>
      <body>
        <div ng-controller="myController"></div>
      </body>
    </html>
`);
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
