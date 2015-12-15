angular
  .module('app')
  .factory('inputFactory', inputFactory);

function inputFactory() {
  var words = {answers: answers()};
  return words;

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
  `<html ng-app='myApp'>
    <head>
      <meta charset="utf-8">
      <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
    </head>
    <body>

    <script></script><script></script><script></script></body>
  </html>`,
      `<html ng-app='myApp'>
          <head>
            <meta charset="utf-8">
            <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
          </head>
          <body>

          <script>angular.module('myApp', [ ])</script><script></script><script></script></body>
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
        <div ng-controller='myController' > </div>
          <script>angular.module('myApp', [ ])</script><script>angular.module('app').controller('myController', myController); function myController(){}</script><script></script></body>
      </html>`,
      `<html ng-app='myApp'>
          <head>
            <meta charset="utf-8">
            <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
          </head>
          <body>
        <div ng-controller='myController' > </div>
          <script>angular.module('myApp', [ ])</script><script>angular.module('app').controller('myController', myController); function myController($scope){
        $scope.name = 'Bob';
        $scope.age = 30;
          $scope.occupation = 'hacker';
        }</script><script></script></body>
        </html>`,
      `<html ng-app='myApp'>
          <head>
            <meta charset="utf-8">
            <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
          </head>
          <body>
        <div ng-controller='myController' >
            {{name}}
              {{age}}
              {{occupation}}
            </div>
          <script>angular.module('myApp', [ ])</script><script>angular.module('app').controller('myController', myController); function myController($scope){
        $scope.name = 'Bob';
        $scope.age = 30;
          $scope.occupation = 'hacker';
        }</script><script></script></body>
      </html>`,
        0,
        `<html ng-app='myApp'>
            <head>
              <meta charset="utf-8">
              <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
            </head>
            <body>
          <body ng-controller='MyFirstController as first'>
              {{name}}
                {{age}}
                {{occupation}}
              </div>
            <script>angular.module('myApp', [ ])</script><script>angular.module('app').controller('myController', myController); function myController($scope){
          $scope.name = 'Bob';
          $scope.age = 30;
            $scope.occupation = 'hacker';
          }</script><script></script></body>
        </html>`,
        `<html ng-app='myApp'>
            <head>
              <meta charset="utf-8">
              <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
            </head>
            <body>
          <body ng-controller='MyFirstController as first'>
              {{name}}
                {{age}}
                {{occupation}}
              </div>
            <script>angular.module('myApp', [ ])</script><script>angular.module('app').controller('myController', myController); function myController(){
            var vm = this;
          vm.name = 'Bob';
          vm.age = 30;
            vm.occupation = 'hacker';
          }</script><script></script></body>
          </html>`,
        `<html ng-app='myApp'>
            <head>
              <meta charset="utf-8">
              <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
            </head>
            <body>
          <body ng-controller='myController as myCtrl'>
              {{myCtrl.name}}
                {{myCtrl.age}}
                {{myCtrl.occupation}}
              </div>
            <script>angular.module('myApp', [ ])</script><script>angular.module('app').controller('myController', myController); function myController(){
            var vm = this;
          vm.name = 'Bob';
          vm.age = 30;
            vm.occupation = 'hacker';
          }</script><script></script></body>
          </html>`
    ];
  }
}
