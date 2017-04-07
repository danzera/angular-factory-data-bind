var myApp = angular.module('myApp', []);

myApp.controller('inputController', ['$scope', 'MovieService', function($scope, MovieService) {
  $scope.movie = {
    name: '',
    description: '',
    director: '',
    runTime: ''
  };
  $scope.addMovie = MovieService.addMovie;
}]);

myApp.controller('outputController', ['$scope', 'MovieService', function($scope, MovieService) {
  $scope.moviesObject = MovieService.moviesObject;
  $scope.moviesArray = MovieService.moviesObject.moviesArray;
  console.log('initial moviesObject: ', $scope.moviesObject);
  console.log('initial moviesArray: ', $scope.moviesArray);
}]);

myApp.factory('MovieService', [function() {
  var moviesObject = {
    moviesArray: [{name: 'Back to the Future', description: 'Time travel via Delorean at 88 mph', director: 'Robert Zemeckis', runTime: '122 minutes'}]
  };

  var addMovie = function(movie) {
    console.log('adding this movie:', movie);
    var newMovie = angular.copy(movie); // make a copy of the movie object
    moviesObject.moviesArray.push(newMovie); // add movie to the array
    clearInputs(movie); // clear user inputs
  };

  // clear all user iput fields
  var clearInputs = function(movie) {
    movie.name = '';
    movie.description = '';
    movie.director = '';
    movie.runTime = '';
  };

  return {
    moviesObject: moviesObject,
    addMovie: addMovie
  };
}]);
