(function(){
  angular
    .module('app')
    .controller('PromptsController', PromptsController);

  PromptsController.$inject = ["$http", "$scope", "inputFactory", "promptFactory"];

  function PromptsController($http, $scope, inputFactory, promptFactory, $mdDialog, $mdMedia) {
    var vm = this;

    vm.getTutorial = getTutorial;
    vm.startTutorial
    vm.nextPrompt = nextPrompt;
    vm.previousPrompt = previousPrompt;
    vm.tutorial = "Tutorial prompts will go here";
    vm.shouldUpdate = 0;

    $scope.$on('answer:correct', function(event, data) {
        vm.shouldUpdate = 1;
        vm.getTutorial();
        $scope.$apply();
    });

    ////////////
    function startTutorial (ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && vm.customFullscreen;
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'htmltemplates/prompt1.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });
      promptFactory.counter = 0;
    }

    function getTutorial() {
      if (promptFactory.counter < promptFactory.allPrompts.length) {
        if(promptFactory.counter === -5) {
            vm.tutorial = promptFactory.allPrompts[0];
            promptFactory.counter = 0;
        }
        else if(inputFactory.answers[promptFactory.counter] === 0 || vm.shouldUpdate === 1) {
            promptFactory.counter++;
            vm.shouldUpdate = 0;
            vm.tutorial = promptFactory.allPrompts[promptFactory.counter];
            promptFactory.currentPrompt++;
          }

      }
    }

    function DialogController($mdDialog) {
      var vm = this;
      vm.hide = function() {
        $mdDialog.hide();
      };

      vm.cancel = function() {
        $mdDialog.cancel();
      };

      vm.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }

    // function nextPrompt() {
    //   if (promptFactory.currentPrompt < promptFactory.counter) {
    //     promptFactory.currentPrompt++;
    //     vm.tutorial = promptFactory.allPrompts[promptFactory.currentPrompt];
    //   }
    // }
    // function previousPrompt() {
    //   if (promptFactory.currentPrompt > 0) {
    //     promptFactory.currentPrompt--;
    //     vm.tutorial = promptFactory.allPrompts[promptFactory.currentPrompt];
    //   }
    // }
  }
}());
