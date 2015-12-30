(function(){
  angular
    .module('app')
    .controller('HistoryController', HistoryController);

  HistoryController.$inject = ['$scope','$timeout', '$mdSidenav', 'promptFactory'];
  function HistoryController($scope, $timeout, $mdSidenav, promptFactory) {
    var vm = this;
    vm.template = {};
    vm.template.getHistory = getHistory;
    vm.openMenu = openMenu;
    vm.close = close;
    vm.template.historyUrl = 'htmltemplates0/prompt1.html';
    vm.promptNames = [
      'Starting Angular & Two-Way Data Binding (Part 1)',
      '-- Input Box',
      '-- Angular Expression',
      '-- What are Angular Expressions?',
      'Naming Your Angular Application',
      'Creating the Foundation for Your Application',
      '-- Explanation',
      'Using $scope in Your Controller',
      '-- Linking the Controller',
      "Two-Way Data Binding (Part 2) & 'controllerAs' syntax",
      "-- Data binding using 'this'",
      "-- Data binding using 'this' part 2",
      'Introduction to factories',
      '-- Factory injection in the controller.js',
      '-- Passing in myFactory after the injection',
      '-- Bringing in data from myFactory',
      '-- Displaying the data from myFactory',
      '-- Displaying just the names from myFactory',
      'Introduction to ng-repeat',
      '-- Using ng-repeat',
      '-- Using Angular Expressions with ng-repeat',
      'Congratulations!'
    ];
    vm.poossiblePrompts = [];



    //////////////

    function close() {
      $mdSidenav('historyRight').close();
    }

    function getHistory(index) {
      vm.template.historyUrl = 'htmltemplates0/prompt' + (index+1) + '.html';


      $timeout(function(){
        $scope.$apply();

        $mdSidenav('historyRight').toggle();
      },250);
    }

    function openMenu($mdOpenMenu, ev) {
      if(promptFactory.counter < 1) {
          vm.poossiblePrompts = vm.promptNames.slice(0, 1);
      } else {
        vm.poossiblePrompts = vm.promptNames.slice(0, promptFactory.counter);
      }
      originatorEv = ev;
      $mdOpenMenu(ev);
    }
  }
}());
