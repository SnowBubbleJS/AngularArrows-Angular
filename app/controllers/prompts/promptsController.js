(function(){
  angular
    .module('app')
    .controller('PromptsController', PromptsController);

  PromptsController.$inject = ["$http", "$scope", "promptFactory", "$interval", "$mdSidenav", "$timeout","$mdMedia"];

  function PromptsController($http, $scope, promptFactory, $interval, $mdSidenav, $timeout,$mdMedia) {
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
    vm.template.url = 'htmltemplates/prompt1.html';
    vm.shouldUpdate = 0;
    vm.shouldStart = true;
    vm.currentTutorial = "";
    vm.close = close;
    vm.progress = 0;




    $interval(function() {
      vm.progress += 15;
      if(vm.progress >= 100) {
        vm.shouldStart = false;
      }
    },100, 7);

    // $scope.toastPosition = angular.extend({},last);
    // vm.close = function () {
    //   $mdSidenav('right').toggle();
    // };


    $scope.$on('answer:correct', function(event, data) {
        vm.shouldUpdate = 1;
        //added timeout so the prompt doesn't show up too quickly
        $timeout(function(){
          vm.getTutorial();
          vm.shouldUpdate = 0;
        },700);


    });





    ////////////

    function close() {
      $mdSidenav('right').close();
    }

    function getTutorial() {
      console.log('insiddeee');
        if(promptFactory.counter === -5) {
            promptFactory.counter = 1;
            console.log('ths is the counter ', promptFactory.counter);
            $timeout(function(){
              $mdSidenav('right').toggle();
            },1250);

        }
        else if(vm.shouldUpdate === 1) {
            vm.shouldUpdate = 0;
            promptFactory.counter += 1;

            console.log('ths is the counter ', promptFactory.counter);
            if(promptFactory.counter % 1 === 0) {

              vm.template.url = 'htmltemplates/prompt' + promptFactory.counter + '.html';
              $scope.$apply();
              console.log(vm.template.url);
              $timeout(function(){
                $mdSidenav('right').toggle();

              },200);
            }
            // $mdSidenav('right').toggle();

          }
          else {
              $mdSidenav('right').toggle();
            }
    }
  }
}());
