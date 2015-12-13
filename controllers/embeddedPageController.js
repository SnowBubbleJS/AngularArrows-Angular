(function(){
  angular
    .module('app')
    .controller('embeddedPage', function(output) {
      var vm = this;
      vm.userInput = 'http://www.localhost:3000/';
      vm.changeLink = function() {
        output.url = $scope.userInput;
        output.render();
      };
    });
}());
