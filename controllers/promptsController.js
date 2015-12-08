angular
  .module('app')
  .controller('promptsController', promptsController);

// promptsController.$inject = ['promptsFactory'];

function promptsController($scope, promptFactory, $http) {
  $scope.tutorial = "Tutorial prompts will be going here";
  var allPrompts;
  $http.get('/prompts').then(function(res, b) {
    console.log('successs!!!');
    allPrompts = JSON.parse(res.data[0]);
    console.log(allPrompts);
  });

  // increments counter to move tutorial series forward
  $scope.getTutorial = function() {
    if (promptFactory.counter < 18) {
      $scope.tutorial = allPrompts[promptFactory.counter];
      promptFactory.counter++;
      promptFactory.currentPrompt = promptFactory.counter;
      console.log(promptFactory.counter);
    }
  };
  $scope.previousPrompt = function () {
    if (promptFactory.currentPrompt > 0) {
      promptFactory.currentPrompt--;
      $scope.tutorial = allPrompts[promptFactory.currentPrompt-1];
      console.log(promptFactory.currentPrompt);
    }
  };
  $scope.nextPrompt = function () {
    if (promptFactory.currentPrompt < promptFactory.counter) {
      $scope.tutorial = allPrompts[promptFactory.currentPrompt+1];
      promptFactory.currentPrompt++;
      console.log(promptFactory.currentPrompt);
    }
  };
}
