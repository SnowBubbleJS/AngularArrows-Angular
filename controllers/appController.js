(function(){
  angular
    .module('app')
    .controller('AppController', myTextArea);

  function myTextArea(output, d3Lines) {
    var vm = this;

    vm.codemirrorLoaded = codemirrorLoaded;
    vm.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'text/javascript',
    };

    ////////////

    function codemirrorLoaded(_editor) {
      _editor.setValue(`angular
      	.module('myApp',[])
      `);
      output.app = _editor.getValue();
      output.render();
      _editor.on('change', function(inst, changes) {
        output.app = _editor.getValue();
        d3Lines.lineFunction('.cm-string:contains(myController)');
        output.render();
      });
    }
  }
}());
