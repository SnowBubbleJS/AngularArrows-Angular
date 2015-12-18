(function(){
  angular
    .module('app')
    .controller('PromptsController', PromptsController);

  PromptsController.$inject = ["$http", "$scope", "inputFactory", "promptFactory"];

  function PromptsController($http, $scope, inputFactory, promptFactory) {
    var vm = this;

    vm.getTutorial = getTutorial;
    vm.nextPrompt = nextPrompt;
    vm.inputFactory = promptFactory;
    vm.counter = promptFactory.shouldUpdate;
    vm.previousPrompt = previousPrompt;
    vm.shouldUpdate = 0;
    vm.tutorial = "Tutorial prompts will go here";



    $scope.$on('answer:correct', function(event, data){
      vm.shouldUpdate = 1;
      vm.getTutorial();
      $scope.$apply();
    });





    ////////////

    function getTutorial() {
      if (promptFactory.counter < promptFactory.allPrompts.length) {
        if(promptFactory.counter === -5) {
            vm.tutorial = promptFactory.allPrompts[0];
            promptFactory.counter = 0;
        }
        else if(inputFactory.answers[promptFactory.counter] === 0 || vm.shouldUpdate === 1) {
            promptFactory.counter++;
            promptFactory.shouldUpdate = 0;
            vm.tutorial = promptFactory.allPrompts[promptFactory.counter];
            promptFactory.currentPrompt = promptFactory.counter;
        }
        else {
            vm.tutorial = promptFactory.allPrompts[promptFactory.counter];
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
