var mongoose = require('mongoose');
var express = require('express');
var Prompt = require('./promptModel.js');

var promptModel = {
  array: [
    "What is AngularJS? - Let’s start this project off by understanding what AngularJS is. AngularJS is a client-side JavaScript framework for making dynamic web applications. Angular lets you use HTML as your template language and allows you to extend HTML's syntax to express your application's components clearly. Angular's two-way data binding and dependency injection eliminate much of the code you would otherwise have to write.",
    "Let’s dive into Angular and look into what Directives are. An Angular Directive extends HTML attributes by placing markers on a HTML tag which tells Angular to run or reference JavaScript code on the marked HTML node and any of that HTML node’s children. Directives allow you to write HTML that expresses the behavior of your application. The first directive we will use is ‘ng-app’, which will initialize your Angular application in the DOM. The ‘ng-app’ directive is commonly added to either the ‘html’ tag or the ‘body’ tag.",
    "I’m sure you’ve heard of how easy two way data binding is in Angular. Let’s write some code to see how easy it really is. But before we do… what exactly is two way data binding? To explain this we need to go ‘under the hood’ of Angular a little.",
    "Two-way data binding in Angular apps is the automatic synchronization of data between the model and view components. A bit confusing right? Don’t worry, you’ll get practice with it so you can visualize what it is.",
    "Now onto a bit of coding, write <code>ng-app</code> into the ‘html’ tag. Congratulations, you’ve initiated your first Angular application, not too bad right?",
    "Next, let’s add an input box within your body like so, <input type='text' ng-model='yourName'>. What is ng-model you ask? ng-model is an Angular directive and what the ng-model directive does is that it binds things like an input or textarea to your applications data.",
    "Right underneath your input, write <code>{{yourName}}</code>, what the heck is that you ask? It’s an Angular expression. Let’s dig a little into what exactly an Angular expression is.",
    "AngularJS expressions are Javascript-like code snippets that usually binds dynamic data to HTML markup by using double curly braces {{data}}.",
    "Congratulations, you made an angular app! Enter your name in the input box. Notice how every key you press it shows right next to it? That is essentially two way data binding.",
    "Now let’s move onto building a bit more complex application using more angular components. Erase the input tags and the angular expression <code>{{yourName}}</code>.",
    "First things first, let’s give your Angular application a name of ‘myApp’. To do this all you need to do is give the value of your ng-app ‘myApp’. Like so, ng-app=’myApp’. Having declared the ng-app directive in the html tag, we have made all application functionality available to the html element and all of its nested elements.",
    "Now let’s move onto the App box. In here we’re going to create a foundation for our application. Write Angular.module(‘myApp’, [ ]), in the next section we’re going to discuss what you just wrote.",
    "You must be wondering what .module is.  A module is a container for different parts of your app. In order to add functionality to our application, we need to build a container for our application. We just wrote <code>angular.module(‘myApp’, [ ]); </code> This is telling angular to create a new container encased in where we defined our ng-app. We will explain in depth why the [ ] is there, but briefly, it’s where we do dependency injections so our angular app can do cool things. Note the 2nd parameter of [ ] is only put in when we are initially creating the module or container. Because we created this container, it only needs to be referenced when we want to add functionality to our application. What you just did was create a ‘setter’ (the defining of your angular module with a second argument) following the style guide. Now we can use the ‘getter’ syntax (discussed later) for every other time we need to reference it! For more information on getters and setters, please visit https://github.com/johnpapa/angular-styleguide#modules",
    "Now that we’ve built the foundation of our application, let’s build a controller john papa’s style.",
    "Before we build the controller, you need to understand that it is common practice to keep all Angular componentry modularized by defining only 1 component per file and even more so to have these separate JavaScript files wrapped within an Immediately Invoked Function expression (IIFE). These IIFEs are created as wrappers for our AngularJS components so that variable names do not clutter the global workspace. IIFEs are characterized by wrapping your function in parentheses followed by a pair of parentheses, for example - ( function(){//codeblock} )(); For more information about the single responsibility of files, please visit https://github.com/johnpapa/angular-styleguide#single-responsibility. For more information about using IIFEs, please visit https://github.com/johnpapa/angular-styleguide#iife.",
    "First, we need to know the role of the controller. A controller as its basic form manages your applications data. We will be creating a controller in the controller.js. Similar to the structure of how you created the module in the app.js, we will need to build the controller in a similar manner. First we need to create the relationship of the controller to the ‘myApp’. In the HTML file, add in <div ng-controller=”myController” > Next, move to the controller.js, in here you will be doing the same thing you did in the app.js to encapsulate the controller in your app. Start by using the getter syntax to chain onto the main module <code>angular.module(‘app’)</code>. Notice the main difference here being that there is no second argument since we’re essentially referring to the main module created in app.js. Now that you’ve created the relationship, let’s tell the Angular App that you want to build a controller. You will be doing this by creating a method after the module (.controller()), the method takes in two parameters. The first parameter is the name of the controller and the second parameter will be a callback function. The callback function will be responsible for managing data. Follow this format: (.controller(‘myController’, myController) function myController(){}).",
    "In order to bind the view to our controller, we will use $scope. $scope is the glue between the Controller and the View that helps with all of our data binding needs. First we need to tell Angular that we want to use $scope. In order to do this, we need to put it as the first parameter in our myController function like so <code> function myController($scope){} <code>, now that we glued the controller to the view, let’s make the controller do things. Inside the controller write <code> $scope.name = ‘Bob’</code> <code> $scope.age = 30 </code> <code> $scope.occupation = ‘hacker’ </code>. Now that we’re done with that, let’s display this information so you can see it.",
    "In the HTML file, within the <div> you created for the ng-controller, write the following Angular Expressions. <code>{{name}}</code> <code>{{age}}</code> <code>{{occupation}}</code>, great job! But, doesn’t it seem like {{name}}, {{age}}, {{occupation}} seem too broad? What if we were creating an application that used those properties a lot? Well we can fix that using john papa’s style guide using controllerAs syntax.",
    "In the html instead of <body ng-controller=”myController”>, we will be using <body ng-controller=”MyFirstController as first”>, make this adjustment into your index.html. Using this syntax in the view, angular will force you to use “dotted” objects in the view, which will prevent reference issues e.g using {{first.name}} makes it a lot more understandable/readable than {{name}}, you might be using name in a lot more places, but it’ll be difficult to catch at first. For more information about this method, please visit https://github.com/johnpapa/angular-styleguide#controllers.",
    "In your controller.js let’s not use $scope to bind our data, but ‘this’. Using ‘this’, will help avoid defining methods into your controller (they should go into factories, which will be discussed later). For now, take out the $scope as the first parameter in your myController function. Instead write <code> var vm = this; </code> as the first line in your function. Because our controller is binded through ‘this’, which we set as ‘vm’, let’s change all of our code to <code>vm.name = ‘Bob’ </code> <code>vm.age = 30 </code> <code> vm.occupation = ‘hacker’ </code>.",
    "As mentioned earlier, since we’re using the controllerAs syntax, we can now show these changes in the view using: <code>{{first.name}}</code> <code>{{first.age}}</code> <code>{{first.occupation}}</code> This will also create two-way binding between our view and our controller, meaning that one change to either will affect the other."
  ],
  findPrompts: function(req, res) {
    Prompt.findOne({}, function(error, prompts) {
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
