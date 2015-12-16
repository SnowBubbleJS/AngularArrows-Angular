(function(){
  angular
    .module('app')
    .controller('HtmlController', HtmlController);

  HtmlController.$inject = ["$http", "$scope", "lineFactory", "output"];

  function HtmlController($http, $scope, lineFactory, output) {
    var vm = this;

    vm.codemirrorLoaded = codemirrorLoaded;
    vm.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'xml',
    };
    // $scope.$emit('recheck', function())


    ////////////

    function codemirrorLoaded(_editor) {
      _editor.setValue(`<html>
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>

  </body>
</html>
      `);
      output.html = _editor.getValue();
      output.render();
      _editor.on('change', function(inst, changes) {
        output.html = _editor.getValue();
        lineFactory.lineFunction('.cm-string:contains(myController)');
        output.render();

        // $http({
        //   method: 'POST',
        //   url: '/prompts'
        // }).then(function successCallback(response) {
        //     console.log(response);
        //   }, function errorCallback(response) {
        //     console.log('failure....');
        //   });

        setTimeout(function() {
          lineFactory.lineFunction('.cm-string:contains(myController)');
        },0);
      });
    };
  }
}());
