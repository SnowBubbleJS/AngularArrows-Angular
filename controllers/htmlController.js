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
    <html ng-app="myApp">
      <head>
        <meta charset="utf-8">
        <title>Test</title>
  </head>
      <body ui-view>
        <div class="" ng-controller="myController">
          <form ng-submit="getMovie()">
            <input type="text" ng-model="movie"  size="30">
            <input class="btn-primary" type="submit" value="add">
          </form>
          {{name}} </br>
          {{info}}
        </div>
      </body>
    </html>
`);
    output.html = _editor.getValue();
    output.render();
    _editor.on('change', function(inst, changes) {
      output.html = _editor.getValue();
      output.render();
    });
  };
}
