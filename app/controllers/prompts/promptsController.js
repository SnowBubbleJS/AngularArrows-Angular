(function(){
  angular
    .module('app')
    .controller('PromptsController', PromptsController);

  PromptsController.$inject = ["$http", "$scope", "promptFactory", "$mdSidenav", "$mdMedia"];

  function PromptsController($http, $scope, promptFactory, $mdSidenav, $mdMedia) {
    var vm = this;
    var last = {
        bottom: false,
        top: true,
        left: false,
        right: true
      };

    vm.getTutorial = getTutorial;
    vm.tutorial = "Tutorial prompts will go here";
    vm.template = {};
    vm.template.url = '';
    vm.shouldUpdate = 0;
    vm.currentTutorial = "";

    $scope.$on('answer:correct', function(event, data) {

      if (!event.defaultPrevented) {
        console.log(event);
         vm.shouldUpdate = 1;
         vm.getTutorial();
         vm.shouldUpdate = 0;
        //  $scope.$apply();
         $mdSidenav('left').toggle();
         event.defaultPrevented = true;
     }
    });



    ////////////

    function getTutorial() {
      console.log('insiddeee');
      if (promptFactory.counter < promptFactory.allPrompts.length) {
        if(promptFactory.counter === -5) {
            promptFactory.counter = 0;
            vm.template.url = 'htmltemplates/prompt' + promptFactory.counter + '.html';
            $scope.$apply();
            $mdSidenav('left').toggle();
        }
        else if(vm.shouldUpdate === 1) {
            vm.shouldUpdate = 0;
            promptFactory.counter++;
            console.log(promptFactory.counter);
            // $mdDialog.show({
            //   controller: DialogController,
            //   templateUrl: 'htmltemplates/prompt' + promptFactory.counter + '.html',
            //   parent: angular.element(document.body),
            //   targetEvent: ev,
            //   clickOutsideToClose:true,
            //   fullscreen: useFullScreen
            // });
            console.log('ths is the counter ', promptFactory.counter);
            vm.template.url = 'htmltemplates/prompt' + promptFactory.counter + '.html';
            console.log(vm.template.url);
            $mdSidenav('left').toggle();
          }
          else {
              // $mdDialog.show({
              //   controller: DialogController,
              //   templateUrl: 'htmltemplates/prompt' + promptFactory.counter + '.html',
              //   parent: angular.element(document.body),
              //   targetEvent: ev,
              //   clickOutsideToClose:true,
              //   fullscreen: useFullScreen
              // });
              $mdSidenav('left').toggle();
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
