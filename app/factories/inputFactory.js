angular
  .module('app')
  .factory('inputFactory', inputFactory);

inputFactory.$inject = ["promptFactory"];

function inputFactory(promptFactory) {
  var words = {};
  words.checkInput = checkInput;
  words.answers = answers();
  return words;

  ////////////

  function checkInput(source) {
    console.log('reached here');
    var userInput, correctAnswer, current = promptFactory.counter;
    if(current === -5) {
      return;
    }
    userInput = source.replace(/(\r\n|\n|\r|\;|\s)/g, '').replace(/(')/g, '"');
    correctAnswer = words.answers[current].replace(/(\r\n|\n|\r|\;|\s)/g, '').replace(/(')/g, '"');
    if (correctAnswer === userInput) {
      return true;
    }
    else {
      return false;
    }
  }



  function answers() {
    return [
      0,
      0,
      0,
      0,
      `<html ng-app>
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
  <script></script><script></script><script></script></body>
</html>`,
    `<html ng-app>
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
    <input type='text' ng-model='yourName'>
  <script></script><script></script><script></script></body>
</html>`,
    `<html ng-app>
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
        <input type='text' ng-model='yourName'>
      {{yourName}}
  <script></script><script></script><script></script></body>
</html>`,
      0,
      0,
      `<html ng-app>
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
  <script></script><script></script><script></script></body>
</html>`,
  `<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
  <script></script><script></script><script></script></body>
</html>`,
      `<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
  <script>angular.module("myApp", [])</script><script></script><script></script></body>
</html>`,
      0,
      0,
      0,
      `<html ng-app='myApp'>
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
<div ng-controller='MyController' > </div>
  <script>angular.module('myApp', [ ])</script><script>angular.module('myApp').controller('MyController', MyController); function MyController(){}</script><script></script></body>
</html>`,
      `<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
    <div ng-controller="MyController"></div>
  <script>angular.module("myApp", []);</script><script>angular.module("myApp")
        .controller("MyController", MyController);

function MyController($scope) {
$scope.name = "Bob";
  $scope.age = 30;
  $scope.occupation = "hacker";
}</script><script></script></body>
</html>`,
      `<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
    <div ng-controller="MyController">
    {{name}}
          {{age}}
          {{occupation}}
    </div>
  <script>angular.module("myApp", [])</script><script>angular.module("myApp")
        .controller("MyController", MyController);

function MyController($scope) {
$scope.name = "Bob";
  $scope.age = 30;
  $scope.occupation = "hacker";
}</script><script></script></body>
</html>`,
        0,
        `<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
    <div ng-controller="MyController as myCtrl">
    {{name}}
          {{age}}
          {{occupation}}
    </div>
  <script>angular.module("myApp", [])</script><script>angular.module("myApp")
        .controller("MyController", MyController);

function MyController($scope) {
$scope.name = "Bob";
  $scope.age = 30;
  $scope.occupation = "hacker";
}</script><script></script></body>
</html>`,
        `<html ng-app='myApp'>
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
<div ng-controller='MyController as myCtrl'>
    {{name}}
      {{age}}
      {{occupation}}
    </div>
  <script>angular.module('myApp', [ ])</script><script>angular.module('myApp').controller('MyController', MyController); function MyController(){
  var vm = this;
vm.name = 'Bob';
vm.age = 30;
  vm.occupation = 'hacker';
}</script><script></script></body>
</html>`,
        `<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
    <div ng-controller="MyController as myCtrl">
    {{myCtrl.name}}
          {{myCtrl.age}}
          {{myCtrl.occupation}}
    </div>
  <script>angular.module("myApp", [])</script><script>angular.module("myApp")
        .controller("MyController", MyController);

function MyController() {
  vm = this;
vm.name = "Bob";
vm.age = 30;
vm.occupation = "hacker";
}</script><script></script></body>
</html>`
    ];
  }
}
