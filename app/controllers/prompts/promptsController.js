(function(){
  angular
    .module('app')
    .controller('PromptsController', PromptsController);

  PromptsController.$inject = ["$http", "$scope", "promptFactory", "$interval", "$mdSidenav", "$timeout","$mdMedia", "lineFactory"];

  function PromptsController($http, $scope, promptFactory, $interval, $mdSidenav, $timeout,$mdMedia, lineFactory) {
    var vm = this,
        promise,
        last = {
          bottom: false,
          top: true,
          left: false,
          right: true
        };

    vm.getTutorial = getTutorial;
    vm.tutorial = "Tutorial prompts will go here";
    vm.template = {};
    vm.template.url = 'htmltemplates/prompt1.html';
    vm.shouldUpdate = 0;
    vm.shouldStart = true;
    vm.currentTutorial = "";
    vm.close = close;
    vm.progress = 0;
    vm.switchStatus = true;
    vm.startLines = startLines;
    vm.stopLines = stopLines;
    $interval(function() {
      vm.progress += 15;
      if(vm.progress >= 100) {
        vm.shouldStart = false;

      }
    },100, 7);

    $scope.$on('answer:correct', function(event, data) {
        vm.shouldUpdate = 1;
        vm.getTutorial();
        vm.shouldUpdate = 0;
    });

    $scope.$watch("vm.switchStatus", function(){
      if(vm.switchStatus) {
        vm.startLines();
      } else {
        vm.stopLines();
      }
    });

    vm.startLines();


    ////////////

    function close() {
      $mdSidenav('right').close();
    }

    function getTutorial() {
      if(promptFactory.counter === -5) {
          promptFactory.counter = 1;
          $timeout(function(){
            $mdSidenav('right').toggle();
          },1250);

      }
      else if(vm.shouldUpdate === 1) {
        vm.shouldUpdate = 0;
        promptFactory.counter += 1;
        if(promptFactory.counter % 1 === 0) {

          vm.template.url = 'htmltemplates/prompt' + promptFactory.counter + '.html';
          $scope.$apply();
          $timeout(function(){
            $mdSidenav('right').toggle();

          },200);
        }
      }
      else {
          $mdSidenav('right').toggle();
      }
    }

    function startLines() {
      vm.stopLines();
      promise = $interval(function() {
        lineFactory.lineHolder();
      }, 100);
    }

    function stopLines() {
      $interval.cancel(promise);
      lineFactory.clearLines();
    }
  }
}());
