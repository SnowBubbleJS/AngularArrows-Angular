(function(){
  angular
    .module('app')
    .controller('PromptsController', PromptsController);

  PromptsController.$inject = ["$http", "$scope", "inputFactory", "promptFactory"];

  function PromptsController($http, $scope, inputFactory, promptFactory) {
    var vm = this;

    vm.getTutorial = getTutorial;
    vm.nextPrompt = nextPrompt;
    vm.promptFactory = promptFactory;
    vm.promptUpdate = promptFactory.shouldUpdate;
    vm.previousPrompt = previousPrompt;
    vm.tutorial = "Tutorial prompts will go here";

    setInterval(function(){
      if(promptFactory.shouldUpdate === 1) {
        vm.getTutorial();
        $scope.$apply();
      }
    },1000);

    // $scope.$watch('promptFactory.shouldUpdate', function(newVal, oldVal) {
    //   // if(newVal) {
    //     console.log('hey watch works! ',newVal);
    //   // }
    // }, true);


    ////////////

    function getTutorial() {
      if (promptFactory.counter < promptFactory.allPrompts.length) {
        if(promptFactory.counter === -5) {
            vm.tutorial = promptFactory.allPrompts[0];
            promptFactory.counter = 0;
        }
        else if(inputFactory.answers[promptFactory.counter] === 0 || promptFactory.shouldUpdate === 1) {
          console.log(promptFactory.counter);
            promptFactory.counter++;
            promptFactory.shouldUpdate = 0;
            vm.tutorial = promptFactory.allPrompts[promptFactory.counter];
            promptFactory.currentPrompt = promptFactory.counter;
          }

      }
    }
    function nextPrompt() {
      if (promptFactory.currentPrompt < promptFactory.counter) {
        promptFactory.currentPrompt++;
        vm.tutorial = promptFactory.allPrompts[promptFactory.currentPrompt];
      }
    }
    function previousPrompt() {
      if (promptFactory.currentPrompt > 0) {
        promptFactory.currentPrompt--;
        vm.tutorial = promptFactory.allPrompts[promptFactory.currentPrompt];
      }
    }
  }
}());
