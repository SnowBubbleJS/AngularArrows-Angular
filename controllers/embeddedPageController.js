angular
  .module('app')
  .controller('embeddedPage', function($scope, output) {
    $scope.userInput = 'http://www.localhost:3000/';
    $scope.changeLink = function() {
      output.url = $scope.userInput;
      output.render();
    };
  });
