(function(){
  angular
    .module('app')
    .controller('PromptsController', promptsController);

  // promptsController.$inject = ['promptsFactory'];

  function promptsController(promptFactory, $http) {
    var vm = this;

    vm.tutorial = "Tutorial prompts will go here";
    vm.getTutorial = getTutorial;
    vm.previousPrompt = previousPrompt;
    vm.nextPrompt = nextPrompt;

    ////////////

    function getTutorial() {
      if (promptFactory.counter < 18) {
        if(promptFactory.counter === -5) {
            vm.tutorial = promptFactory.allPrompts.$$state.value[0];
            promptFactory.counter = 0;
        }
        else {
          promptFactory.counter++;
          vm.tutorial = promptFactory.allPrompts.$$state.value[promptFactory.counter];
          promptFactory.currentPrompt = promptFactory.counter;
        }
      }
    }
    function previousPrompt() {
      if (promptFactory.currentPrompt > 0) {
        promptFactory.currentPrompt--;
        vm.tutorial = promptFactory.allPrompts.$$state.value[promptFactory.currentPrompt];
      }
    }
    function nextPrompt() {
      if (promptFactory.currentPrompt < promptFactory.counter) {
        promptFactory.currentPrompt++;
        vm.tutorial = promptFactory.allPrompts.$$state.value[promptFactory.currentPrompt];
      }
    }
  }
}());
