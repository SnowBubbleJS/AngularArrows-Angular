(function(){
  angular
    .module('app')
    .factory('promptFactory', promptFactory);

    function promptFactory($http) {
        return {
          counter: -5,
          currentPrompt: 0,
          allPrompts: getAllPrompts()
        };
        function getAllPrompts() {
          return $http.get('/prompts').then(function(res, b) {
            console.log(JSON.parse(res.data[0]));
            return JSON.parse(res.data[0]);
          });
        }
    }
}());
