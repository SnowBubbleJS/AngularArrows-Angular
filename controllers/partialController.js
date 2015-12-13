(function(){
  angular
    .module('app')
    .controller('partialController', myTextArea);

  function myTextArea(output) {
    var vm = this;
    vm.editorOptions = {
        readOnly: 'nocursor',
        lineWrapping : true,
        lineNumbers: true,
        mode: 'text/javascript',
    };
    vm.codemirrorLoaded = function(_editor) {
      _editor.setValue(`
  `);
      output.partial = _editor.getValue();
      output.render();
      _editor.on('change', function(inst, changes) {
        output.partial = _editor.getValue();
        output.render();
      });
    };
  }
}());
