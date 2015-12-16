(function(){
  angular
    .module('app')
    .controller('PromptsController', PromptsController);

  PromptsController.$inject = ["$http", "$scope", "inputFactory", "promptFactory"];

  function PromptsController($http, $scope, inputFactory, promptFactory) {
    var vm = this;

    vm.getTutorial = getTutorial;
    vm.nextPrompt = nextPrompt;
    vm.noAnswerPrompts = [0,1,2,3,7,8,12,13,14,18];
    vm.previousPrompt = previousPrompt;
    vm.tutorial = "Tutorial prompts will go here";

    setInterval(function(){
      console.log(promptFactory.shouldUpdate);
      if(promptFactory.shouldUpdate === 1) {
        vm.getTutorial();
        $scope.$apply();
        console.log("omhhi");
      }
    },1000);

    ////////////

    function getTutorial() {
      if (promptFactory.counter < promptFactory.allPrompts.length) {
        if(promptFactory.counter === -5) {
            vm.tutorial = promptFactory.allPrompts[0];
            promptFactory.counter = 0;
        }
        else if(inputFactory.answers[promptFactory.counter] === 0 || promptFactory.shouldUpdate === 1) {
            promptFactory.counter++;
            promptFactory.shouldUpdate = 0;
            vm.tutorial = promptFactory.allPrompts[promptFactory.counter];
            console.log('should show', vm.tutorial);
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
