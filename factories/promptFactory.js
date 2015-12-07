angular
  .module('app')
  .factory('prompt', prompt);

function prompt ($http) {
  return $http:.get('/prompt')
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return console.log(error);
    });
}
