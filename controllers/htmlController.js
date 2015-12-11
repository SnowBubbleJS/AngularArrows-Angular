angular
  .module('app')
  .controller('htmlController', myTextArea);

function myTextArea($scope, output, $http) {

  $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'xml',
  };
  $scope.codemirrorLoaded = function(_editor) {
    _editor.setValue(`<div ng-app = 'myApp'>
    	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular.min.js"></script>
  <div ng-controller='myController'>
      <form ng-submit="getMovie()">
        <input type='text' ng-model='movie' size="30" />
          <input class="btn-primary" type="submit" value="add" />
      </form>
        	{{name}}
    	</div>
    </div>
    `);
    output.html = _editor.getValue();
    output.render();
    _editor.on('change', function(inst, changes) {
      output.html = _editor.getValue();
      lineFunction('.cm-string:contains(myController)');
      output.render();
      setTimeout(function() {
        linefunction('.cm-string:contains(myController)');
      },0);
    });
  };
}
