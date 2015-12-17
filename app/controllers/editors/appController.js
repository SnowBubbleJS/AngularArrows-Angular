(function(){
  angular
    .module('app')
    .controller('AppController', AppController);

  AppController.$inject = ["output", "lineFactory"];

  function AppController(output, lineFactory) {
    var vm = this;

    vm.codemirrorLoaded = codemirrorLoaded;
    vm.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'text/javascript',
    };

    ////////////

    function codemirrorLoaded(_editor) {
      output.app = _editor.getValue();
      output.render();
      _editor.on('change', function(inst, changes) {
        output.app = _editor.getValue();
        lineFactory.lineFunction('.cm-attribute:contains(ng-app)', '.cm-property:contains("module")');
        output.render();
        setTimeout(function() {
          // lineFactory.lineFunction('.cm-string:contains(myController)');
          lineFactory.lineFunction('.cm-attribute:contains(ng-app)', '.cm-property:contains(module)');
        }, 0);
      });
    }
  }
}());
