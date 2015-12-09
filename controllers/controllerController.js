angular
  .module('app')
  .controller('controllerController', myTextArea);

function myTextArea($scope, output,$timeout) {
  $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'text/javascript',
  };
  $scope.codemirrorLoaded = function(_editor) {
    _editor.setValue(`angular
    	.module('myApp')
    	.controller('myController',myController)
      function myController($scope){
        $scope.movie = 'Frozen';
        $scope.getMovie = function(){
          console.log($scope.movie);
        }
      }
    `);
    output.controller = _editor.getValue();
    output.render();
    _editor.on('change', function(inst, changes) {
      output.controller = _editor.getValue();

      lineFunction('.cm-string:contains(myController)');
      output.render();
      setTimeout(function() {
        linefunction('.cm-string:contains(myController)');
      },0);
    });
  };
}
