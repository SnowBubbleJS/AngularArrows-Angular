angular
  .module('app')
  .factory('promptFactory', promptFactory);

  function promptFactory() {
      return {
        counter: 0,
        currentPrompt: 0
      };
  }
