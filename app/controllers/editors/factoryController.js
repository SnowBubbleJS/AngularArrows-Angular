(function(){angular
  .module('app')
  .controller('FactoryController', FactoryController);

  FactoryController.$inject = ["lineFactory", "output"];

  function FactoryController(lineFactory, output) {
    var vm = this;

    vm.codemirrorLoaded = codemirrorLoaded;
    vm.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'text/javascript',
    };


    ////////////

    function codemirrorLoaded(_editor) {
      output.factory = _editor.getValue();
      output.render();
      _editor.on('change', function(inst, changes) {
        output.factory = _editor.getValue();
        lineFactory.lineHolder();
      output.render();
      setTimeout(function() {
        lineFactory.lineHolder();
      },0);
      });
    }
  }
}());
