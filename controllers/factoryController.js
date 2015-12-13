(function(){angular
  .module('app')
  .controller('factoryController', factoryController);

  function factoryController(output) {
    var vm = this;
    vm.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'text/javascript',
    };
    vm.codemirrorLoaded = function(_editor) {
      _editor.setValue();
      output.factory = _editor.getValue();
      output.render();
      _editor.on('change', function(inst, changes) {
        output.factory = _editor.getValue();
        output.render();
      });
    };
  }
}());
