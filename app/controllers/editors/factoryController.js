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
      _editor.setValue(`


  function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} `);
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
