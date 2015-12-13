var mongoose = require('mongoose');
var express = require('express');
var Prompt = require('./promptModel.js');

var promptModel = {
  array: [
    "In order for your Angular application to work, we will have to initialize the application in our HTML file and to do so we attach a specific attribute to a DOM element where we want our Angular application to appear. ng-app is commonly given as an attribute to either <html> or <body> element, but for the purposes of our tutorial we will attach it to the <body> element. Please give ng-app the value of myApp.",

    "The application is a JavaScript file so in our app.js editor we provided you will with starter code so we can understand Angular's two-way data binding and as an example we will explore Angular models. In the <body>, create an attribute of ng-model with a value of movie at the first <input> of the <form> in the <body> of the document.",

    "Angular references data with a particular syntax, {{DATA_REFERENCE}} (double curly braces). This displays the content declared within Angular attribute also known as directives. Directives are identified in the HTML document with the ng-. Beneath the <input> create a data reference to the value of the ng-model. Test drive the output in the view and type a few characters in the input field and see what shows up. Characters should be reflecting what you type and this is one of the most simplest models for exhibiting Angular two-way binding.",

    "Following the coding style when creating a module in the app.js, we will be making another example of two-way data binding by the use of a different directive called ng-controller instead of using ng-model. In your controller called myController in the controller.js file, the myController function will be declared with $scope as a parameter. Have your function reference $scope and set a property of it called name equal to your name. Controllers are meant to be small and lightweight to manage and manipulate transient data.",

    "Angular services are generally identified as variables with dollar signs before them, i.e. $scope or $http. Services are objects with a collection of methods that Angular provides for functionality. For Angular, $scope is an object that refers to the application model that enables data coming from a controller to act in a similar fashion to ng-model.",

    "A method of $scope will be added to the controller called getMovie where you will assign the value of $scope.name to $scope.movie and afterwards re-assigning $scope.movie to an empty string. Having done so, attach a ng-submit to the <form> for the getMovie() method from myController. Attempt to place your favorite movie name into the input field and submit your selection with the button. Notice how the data has changed again to update your $scope.name value with the value taken from $scope.movie.",

    "The same way we created a controller, we will be creating a factory in factory.js. Factories are similar to controllers, but are used for persistent data that can be used to pass down to other controllers to manipulate.",

    "Create a factory called myFactory to Angular and create its function the $http service as a parameter. In order to make use of this service we have to make it available to the factory by using method on the factory called .$inject. We will then assign myFactory.$inject equivalent to a single element array with a string value of $http.",

    "This is a common practice in Angular to provide functionality amongst its toolkit. It is better known as dependency injection. The injection of $http allows for Angular to perform AJAX actions with data so the myFactory function will declare a function within it named getMovieInfo that returns the $http.get() to http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json and returns a Promise with .then() for success chained with .catch() to manage failures in data retrieval.",

    "The Promise requires callback functions. Create two functions within getMovieInfo, one function called getMovieComplete that takes in a response parameter and returns response.data. The other function is called getMovieFailed that will take in an error parameter and will console.log(error). The .then() will be given getMovieComplete as a callback and .catch() will take getMovieFailed.",

    "Having retrieved the persistent data that we are requesting for the factory we must output this data from it for other Angular bits to use by returning an object with a key:value pair getMovieInfo: getMovieInfo - the property is referencing the function with the same name that is retrieving the data.",

    "Now with the creation of the factory we will be modifying myController to update your name with some movie data instead. In order to use the myFactory in the myController we have to insert it as an additional parameter for its function. We are going to retrieve year of our movie query so to display it create a variable, movieData, that is equal to the factory method we made, getMovieInfo.",

    "Afterward in the $scope.getMovie function, we are going to re-assign $scope.name to our freshly created variable. Here we've done a little bit of digging into the JSON data object that is returning for you so set $scope.name equal to movieData.$$state.value.Year.",

    "Notice that the functionality of our application has changed. Instead our form submission with our user input used to bind our selection, but it will now do an AJAX request to retrieve persistent data from our factory to retrieve the release year of the Disney movie, Frozen.",

    "You may have discovered a big ugly box that doesn't work on our application page. Well, we're going to fill that up with a partial HTML. Angular makes great use of partial HTML in its single-page application environment so in the partial.html we'll make another data reference to name from out controller. However, the partial still doesn't work because we are going to require a routing tool to deliver this page. We'll be using ui-router to do so and in the same way we will inject this as a dependency to the application itself.",

    "Where myApp was originally defined in app.js lies an empty array as a parameter and here is where we will be injecting ui-router, an open source extension for improving Angular's single-page web application functionality for HTML partials. Following the module function, a .config() function is chained to reference a function called configFunction that we will be creating in the same file.",

    "configFunction will make use of ui-router to display our partial HTML. Declare the function passing it two parameters $stateProvider, $urlRouteProvider. Inside the function use the $stateProvider.state() method, it acts similarly to HTTP request using two parameters to configure it - the first that gives it a name and the second an object that determines the configuration of the route. Assign the first parameter as a string name and within the object parameter: url: '/test', templateUrl: './partial.html', controller: 'myController'.",

    "Check out your partial HTML in the output! You're on your way to becoming a sharp Angular master."
  ],
  findPrompts: function(req, res) {
    Prompt.findOne({}, function(error, prompts) {
      console.log(prompts);
      res.send(prompts);
    });
  },
  postPrompts: function(req, res) {
    Prompt.findOne({}, function(error, prompts) {
      console.log('this is prompts' + prompts);
      if(prompts === null) {
        Prompt.create({0: JSON.stringify(promptModel.array)}, function(error, a, b) {
          if(error) {
            console.log('oh no' + error);
          } else {
            console.log('works!' + a + b);
          }
        });
      }
    });
  }
};


module.exports = promptModel;
