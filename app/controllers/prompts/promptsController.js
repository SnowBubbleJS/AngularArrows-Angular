(function(){
  angular
    .module('app')
    .controller('PromptsController', PromptsController);

  PromptsController.$inject = ["$http", "$scope", "inputFactory", "promptFactory", "$mdDialog", "$mdMedia"];

  function PromptsController($http, $scope, inputFactory, promptFactory, $mdDialog, $mdMedia) {
    var vm = this;

    vm.getTutorial = getTutorial;
    vm.tutorial = "Tutorial prompts will go here";
    vm.shouldUpdate = 0;

    $scope.$on('answer:correct', function(event, data) {
        vm.shouldUpdate = 1;
        vm.getTutorial();
        $scope.$apply();
    });


    ////////////

    function getTutorial(ev) {
      if (promptFactory.counter < promptFactory.allPrompts.length) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && vm.customFullscreen;
        if(promptFactory.counter === -5) {
            promptFactory.counter = 1;

            $mdDialog.show({
              controller: DialogController,
              templateUrl: 'htmltemplates/prompt' + promptFactory.counter + '.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true,
              fullscreen: useFullScreen
            });


        }
        else if(inputFactory.answers[promptFactory.counter] === 0 || vm.shouldUpdate === 1) {
            promptFactory.counter++;
            vm.shouldUpdate = 0;

            $mdDialog.show({
              controller: DialogController,
              templateUrl: 'htmltemplates/prompt' + promptFactory.counter + '.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true,
              fullscreen: useFullScreen
            });

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
  }
}());
