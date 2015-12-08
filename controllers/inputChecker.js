angular
  .module('app')
  .controller('inputChecker', inputChecker);

function inputChecker($scope, output) {
  $scope.testString = output.source[0].replace(/(\r\n|\n|\r|\s)/g, '').replace(/(')/g, '"');
  $scope.testString = output.source[0];
  // setInterval(function() {
  //     $scope.testString = output.source[0].replace(/(\r\n|\n|\r|\s)/g, '').replace(/(')/g, '"');
  //     console.log($scope.testString);
  // },1000);
}
