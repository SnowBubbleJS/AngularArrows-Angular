(function(){
  angular
    .module('app')
    .controller('inputChecker', inputCheckerF);

  function inputCheckerF($scope, output) {
  // console.log(output);
    // vm.copyString = output;
    // console.log('hi');
    var vm = this;
    vm.output = output.source;
    console.log(vm.output);
    vm.testString = output.source.replace(/(\r\n|\n|\r|\s)/g, '').replace(/(')/g, '"');
    // console.log(output.source);
    $scope.$watch(function() {return vm.output;},function(a,b,c) {
      console.log(vm.output);
      console.log(arguments);
      console.log('watching....');
    }, true);

    // setInterval(function() {
    //   vm.testString = output.source.replace(/(\r\n|\n|\r|\s)/g, '').replace(/(')/g, '"');
    //   console.log(vm.testString);
    //   checkStatus(vm.testString);
    // },1000);
  }

}());
