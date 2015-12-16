(function(){
  angular
    .module('app')
    .controller('InputChecker', InputChecker);

  InputChecker.$inject = ["$scope", "output"];

  function InputChecker($scope, output) {
    var vm = this;

    vm.output = output.source;
    vm.testString = output.source.replace(/(\r\n|\n|\r|\s)/g, '').replace(/(')/g, '"');
  }

}());
