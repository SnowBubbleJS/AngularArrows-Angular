angular
  .module('app')
  .controller('inputChecker', inputCheckerF);

function inputCheckerF($scope, output) {
// console.log(output);
  // $scope.copyString = output;
  // console.log('hi');
  $scope.output = output.source;
  console.log($scope.output);
  $scope.testString = output.source.replace(/(\r\n|\n|\r|\s)/g, '').replace(/(')/g, '"');
  // console.log(output.source);
  $scope.$watch(function() {return $scope.output;},function(a,b,c) {
    console.log($scope.output);
    console.log(arguments);
    console.log('watching....');
  }, true);

  // setInterval(function() {
  //   $scope.testString = output.source.replace(/(\r\n|\n|\r|\s)/g, '').replace(/(')/g, '"');
  //   console.log($scope.testString);
  //   checkStatus($scope.testString);
  // },1000);
}
