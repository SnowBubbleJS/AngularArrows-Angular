angular
  .module('app')
  .factory('inputFactory', inputFactory);

inputFactory.$inject = ["$rootScope", "promptFactory"];

function inputFactory($rootScope, promptFactory) {
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
    if(!source || !words.answers[current]) { return; }
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
      //prompt 1
      `<html ng-app>
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
  <script></script><script></script><script>function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
  //prompt 2
    `<html ng-app>
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body><input type="text" ng-model="yourName">
  <script></script><script></script><script>function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
//prompt 3
    `<html ng-app>
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body><input type="text" ng-model="yourName"> {{yourName}}
  <script></script><script></script><script>function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
//prompt 4
      `<html ng-app>
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
  <script></script><script></script><script>function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
    //prompt 5
      `<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
  <script></script><script></script><script>function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
      //prompt 6
      `<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
  <script>angular.module('myApp', [])</script><script></script><script>function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
      //prompt 7
      `<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
    <div ng-controller="MyController"></div>
  <script>angular.module('myApp', [])</script><script>angular.module('myApp')
	.controller('MyController', MyController)

function MyController() {}</script><script>function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
      //prompt 8
      `<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
    <div ng-controller="MyController"></div>
  <script>angular.module('myApp', [])</script><script>angular.module('myApp')
	.controller('MyController', MyController)

function MyController($scope) {
$scope.name = "Bob";
$scope.age = 30;
  $scope.occupation = 'hacker';

}</script><script>function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
    //prompt 9
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
  <script>angular.module('myApp', [])</script><script>angular.module('myApp')
	.controller('MyController', MyController)

function MyController($scope) {
$scope.name = "Bob";
$scope.age = 30;
  $scope.occupation = 'hacker';

}</script><script>function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
    //prompt 10
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
  <script>angular.module('myApp', [])</script><script>angular.module('myApp')
	.controller('MyController', MyController)

function MyController($scope) {
$scope.name = "Bob";
$scope.age = 30;
  $scope.occupation = 'hacker';

}</script><script>function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
      //prompt 11
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
  <script>angular.module('myApp', [])</script><script>angular.module('myApp')
	.controller('MyController', MyController)

function MyController() {
  var vm = this;
vm.name = "Bob";
vm.age = 30;
vm.occupation = 'hacker';

}</script><script>function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
    //prompt 12
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
  <script>angular.module('myApp', [])</script><script>angular.module('myApp')
	.controller('MyController', MyController)

function MyController() {
  var vm = this;
vm.name = "Bob";
vm.age = 30;
vm.occupation = 'hacker';

}</script><script>function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
      //prompt 13
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
  <script>angular.module('myApp', [])</script><script>angular.module('myApp')
	.controller('MyController', MyController)

function MyController() {
  var vm = this;
vm.name = "Bob";
vm.age = 30;
vm.occupation = 'hacker';

}</script><script>angular.module('myApp')
	.factory('myFactory', myFactory);

function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
    //prompt 14
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
  <script>angular.module('myApp', [])</script><script>angular.module('myApp')
	.controller('MyController', MyController)

MyController.$inject = ["myFactory"]

function MyController() {
  var vm = this;
vm.name = "Bob";
vm.age = 30;
vm.occupation = 'hacker';

}</script><script>angular.module('myApp')
	.factory('myFactory', myFactory);


function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
    //prompt 15
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
  <script>angular.module('myApp', [])</script><script>angular.module('myApp')
	.controller('MyController', MyController)

MyController.$inject = ["myFactory"]

function MyController(myFactory) {
  var vm = this;
vm.name = "Bob";
vm.age = 30;
vm.occupation = 'hacker';
}</script><script>angular.module('myApp')
	.factory('myFactory', myFactory);


function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
    //prompt 16
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
  <script>angular.module('myApp', [])</script><script>angular.module('myApp')
	.controller('MyController', MyController)

MyController.$inject = ["myFactory"]

function MyController(myFactory) {
  var vm = this;
  vm.list = myFactory;
}</script><script>angular.module('myApp')
	.factory('myFactory', myFactory);


function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
    //prompt 17
    `<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
    <div ng-controller="MyController as myCtrl">
    {{myCtrl.list}}
    </div>
  <script>angular.module('myApp', [])</script><script>angular.module('myApp')
	.controller('MyController', MyController)

MyController.$inject = ["myFactory"]

function MyController(myFactory) {
  var vm = this;
  vm.list = myFactory;
}</script><script>angular.module('myApp')
	.factory('myFactory', myFactory);


function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
    //prompt 18
    `<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
    <div ng-controller="MyController as myCtrl">
          {{myCtrl.list[0].name}}
          {{myCtrl.list[1].name}}
          {{myCtrl.list[2].name}}
    </div>
  <script>angular.module('myApp', [])</script><script>angular.module('myApp')
	.controller('MyController', MyController)

MyController.$inject = ["myFactory"]

function MyController(myFactory) {
  var vm = this;
  vm.list = myFactory;
}</script><script>angular.module('myApp')
	.factory('myFactory', myFactory);


function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
    //prompt 19
  `<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
    <div ng-controller="MyController as myCtrl">
      <div></div>
    </div>
  <script>angular.module('myApp', [])</script><script>angular.module('myApp')
	.controller('MyController', MyController)

MyController.$inject = ["myFactory"]

function MyController(myFactory) {
  var vm = this;
  vm.list = myFactory;
}</script><script>angular.module('myApp')
	.factory('myFactory', myFactory);


function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
    //prompt 20
    `<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
    <div ng-controller="MyController as myCtrl">
      <div ng-repeat="list in myCtrl.list"></div>
    </div>
  <script>angular.module('myApp', [])</script><script>angular.module('myApp')
	.controller('MyController', MyController)

MyController.$inject = ["myFactory"]

function MyController(myFactory) {
  var vm = this;
  vm.list = myFactory;
} </script><script>angular.module('myApp')
	.factory('myFactory', myFactory);


function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
    //prompt 21
    `<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
  </head>
  <body>
    <div ng-controller="MyController as myCtrl">
      <div ng-repeat="list in myCtrl.list">{{list.name}}</div>
    </div>
  <script>angular.module('myApp', [])</script><script>angular.module('myApp')
	.controller('MyController', MyController)

MyController.$inject = ["myFactory"]

function MyController(myFactory) {
  var vm = this;
  vm.list = myFactory;
}  </script><script>angular.module('myApp')
	.factory('myFactory', myFactory);


function myFactory(){

  var FriendsList = [
    {'name':'Bryan',
     'age': 30,
     'pet': 'none'
    },
    {'name': 'Matt',
     'age': 29,
     'pet': 'nyan_cat'
    },
    {'name':'Daniel',
     'age': 25,
     'pet':'catdog'
    }
 ]

  return FriendsList;
} </script></body>
</html>`,
//prompt 22
'askldnaslkdasld'
    ];
  }
}
