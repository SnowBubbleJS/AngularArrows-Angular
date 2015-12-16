(function(){
  angular
    .module('app')
    .controller('ControllerController', ControllerController);

  ControllerController.$inject = ["d3Lines", "output"];

  function ControllerController(d3Lines, output) {
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
        d3Lines.lineFunction('.cm-string:contains(myController)');
        output.render();
        setTimeout(function() {
          d3Lines.lineFunction('.cm-string:contains(myController)');
        },0);
      });
    }
  }
}());
