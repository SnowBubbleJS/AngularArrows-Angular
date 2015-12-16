(function(){
  angular
    .module('app')
    .controller('ControllerController', ControllerController);

  ControllerController.$inject = ["lineFactory", "output"];

  function ControllerController(lineFactory, output) {
    var vm = this;

    vm.codemirrorLoaded = codemirrorLoaded;
    vm.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'text/javascript',
    };

    ////////////

    function codemirrorLoaded(_editor) {
      output.controller = _editor.getValue();
      output.render();
      _editor.on('change', function(inst, changes) {
        output.controller = _editor.getValue();
        lineFactory.lineFunction('.cm-string:contains(myController)');
        output.render();
        setTimeout(function() {
          lineFactory.lineFunction('.cm-string:contains(myController)');
        },0);
      });
    }
  }
}());
