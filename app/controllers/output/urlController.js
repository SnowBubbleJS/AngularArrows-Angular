(function(){
  angular
    .module('app')
    .controller('EmbeddedPage', EmbeddedPage);

  EmbeddedPage.$inject = ["output"];

  function EmbeddedPage(output) {
      var vm = this;

      vm.changeLink = changeLink;
      vm.userInput = 'http://www.localhost:3000/';

      function changeLink() {
        output.url = vm.userInput;
        console.log('im here', output);
        output.render();
      }
  }
}());
