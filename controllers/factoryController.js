(function(){angular
  .module('app')
  .controller('FactoryController', factoryController);

  function factoryController(output) {
    var vm = this;

    vm.codemirrorLoaded = codemirrorLoaded;
    vm.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'text/javascript',
    };

    ////////////

    function codemirrorLoaded(_editor) {
      _editor.setValue();
      output.factory = _editor.getValue();
      output.render();
      _editor.on('change', function(inst, changes) {
        output.factory = _editor.getValue();
        output.render();
      });
    }
  }
}());
