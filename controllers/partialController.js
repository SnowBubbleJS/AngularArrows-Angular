(function(){
  angular
    .module('app')
    .controller('PartialController', myTextArea);

  myTextArea.$inject = ["output"];

  function myTextArea(output) {
    var vm = this;

    vm.codemirrorLoaded = codemirrorLoaded;
    vm.editorOptions = {
        readOnly: 'nocursor',
        lineWrapping : true,
        lineNumbers: true,
        mode: 'text/javascript',
    };

    ////////////

    function codemirrorLoaded(_editor) {
      _editor.setValue(`
  `);
      output.partial = _editor.getValue();
      output.render();
      _editor.on('change', function(inst, changes) {
        output.partial = _editor.getValue();
        output.render();
      });
    }
  }
}());
