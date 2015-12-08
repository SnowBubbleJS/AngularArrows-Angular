angular
  .module('myApp')
  .controller('myController', myController);

function myController($scope, myFactory) {
  console.log('hereeee');
  var movieData = myFactory.getMovieInfo();
  $scope.name = "Bryan";
  $scope.movie = "";
  $scope.info = 'hi';
  $scope.getMovie = function() {
    // $scope.info = movieData.$$state.value.Year;
    $scope.name = $scope.movie;
    $scope.movie = "";
  };
}
