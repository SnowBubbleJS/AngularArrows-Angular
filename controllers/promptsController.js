(function(){
  angular
    .module('app')
    .controller('promptsController', promptsController);

  // promptsController.$inject = ['promptsFactory'];

  function promptsController(promptFactory, $http) {
    var vm = this;
    vm.tutorial = "Tutorial prompts will be going here";
    var allPrompts;
    $http.get('/prompts').then(function(res, b) {
      console.log('successs!!!');
      allPrompts = JSON.parse(res.data[0]);
      console.log(allPrompts);
    });

    // increments counter to move tutorial series forward
    vm.getTutorial = function() {
      if (promptFactory.counter < 18) {
        vm.tutorial = allPrompts[promptFactory.counter];
        promptFactory.counter++;
        promptFactory.currentPrompt = promptFactory.counter;
        console.log(promptFactory.counter);
      }
    };
    vm.previousPrompt = function () {
      if (promptFactory.currentPrompt > 0) {
        promptFactory.currentPrompt--;
        vm.tutorial = allPrompts[promptFactory.currentPrompt-1];
        console.log(promptFactory.currentPrompt);
      }
    };
    vm.nextPrompt = function () {
      if (promptFactory.currentPrompt < promptFactory.counter) {
        vm.tutorial = allPrompts[promptFactory.currentPrompt+1];
        promptFactory.currentPrompt++;
        console.log(promptFactory.currentPrompt);
      }
    };
  }
}());
