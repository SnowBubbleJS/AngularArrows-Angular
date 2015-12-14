(function(){
  angular
    .module('app')
    .controller('EmbeddedPage', function(output) {
      var vm = this;

      vm.userInput = 'http://www.localhost:3000/';
      vm.changeLink = changeLink;

      ////////////

      function changeLink(output) {
        output.url = $scope.userInput;
        output.render();
      }
    });
}());
