(function(){
  angular
    .module('app')
    .controller('HtmlController', myTextArea);

  function myTextArea(output, $http, d3Lines) {
    var vm = this;

    vm.codemirrorLoaded = codemirrorLoaded;
    vm.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'xml',
    };

    ////////////

    function codemirrorLoaded(_editor) {
      _editor.setValue(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>

  </body>
</html>
      `);
      output.html = _editor.getValue();
      output.render();
      _editor.on('change', function(inst, changes) {
        output.html = _editor.getValue();
        d3Lines.lineFunction('.cm-string:contains(myController)');
        output.render();

        $http({
          method: 'GET',
          url: '/prompts'
        }).then(function successCallback(response) {
            console.log(response);
          }, function errorCallback(response) {
            console.log('failure....');
          });





        setTimeout(function() {
          d3Lines.lineFunction('.cm-string:contains(myController)');
        },0);
      });
    };
  }
}());
