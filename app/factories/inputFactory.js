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
	<script type='text/javascript'  src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
    <script type="text/javascript" src="example/app.js"></script>
    <script type="text/javascript" src="example/controller.js"></script>
    <script type="text/javascript" src="example/factory.js"></script>
  </head>
  <body>
  <script>(function() {

}());</script><script>(function() {

}());</script><script>(function() {
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
     ];
    return FriendsList;
  }
}());</script></body>
</html>`,
  //prompt 2
    `<html ng-app>
      <head>
        <meta charset="utf-8">
    	<script type='text/javascript'  src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
        <script type="text/javascript" src="example/app.js"></script>
        <script type="text/javascript" src="example/controller.js"></script>
        <script type="text/javascript" src="example/factory.js"></script>
      </head>
      <body><input type="text" ng-model="yourName">
      <script>(function() {

    }());</script><script>(function() {

    }());</script><script>(function() {
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
         ];
        return FriendsList;
      }
    }());</script></body>
    </html>`,
//prompt 3
    `<html ng-app>
      <head>
        <meta charset="utf-8">
    	<script type='text/javascript'  src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
        <script type="text/javascript" src="example/app.js"></script>
        <script type="text/javascript" src="example/controller.js"></script>
        <script type="text/javascript" src="example/factory.js"></script>
      </head>
      <body><input type="text" ng-model="yourName">{{yourName}}
      <script>(function() {

    }());</script><script>(function() {

    }());</script><script>(function() {
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
         ];
        return FriendsList;
      }
    }());</script></body>
    </html>`,
//prompt 4
      `<html ng-app>
        <head>
          <meta charset="utf-8">
      	<script type='text/javascript'  src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
          <script type="text/javascript" src="example/app.js"></script>
          <script type="text/javascript" src="example/controller.js"></script>
          <script type="text/javascript" src="example/factory.js"></script>
        </head>
        <body>
        <script>(function() {

      }());</script><script>(function() {

      }());</script><script>(function() {
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
           ];
          return FriendsList;
        }
      }());</script></body>
      </html>`,
    //prompt 5
      `<html ng-app="myApp">
        <head>
          <meta charset="utf-8">
      	<script type='text/javascript'  src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
          <script type="text/javascript" src="example/app.js"></script>
          <script type="text/javascript" src="example/controller.js"></script>
          <script type="text/javascript" src="example/factory.js"></script>
        </head>
        <body>
        <script>(function() {

      }());</script><script>(function() {

      }());</script><script>(function() {
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
           ];
          return FriendsList;
        }
      }());</script></body>
      </html>`,
      //prompt 6
      `<html ng-app="myApp">
        <head>
          <meta charset="utf-8">
      	<script type='text/javascript'  src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
          <script type="text/javascript" src="example/app.js"></script>
          <script type="text/javascript" src="example/controller.js"></script>
          <script type="text/javascript" src="example/factory.js"></script>
        </head>
        <body>
        <script>(function() {
      angular.module('myApp', [])
      }());</script><script>(function() {

      }());</script><script>(function() {
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
           ];
          return FriendsList;
        }
      }());</script></body>
      </html>`,
      //prompt 7
      `<html ng-app='myApp'>
  <head>
    <meta charset="utf-8">
	<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
    <script type="text/javascript" src="example/app.js"></script>
    <script type="text/javascript" src="example/controller.js"></script>
    <script type="text/javascript" src="example/factory.js"></script>
  </head>
  <body>
	<div ng-controller='MyController'></div>
  <script>(function() {
	angular.module('myApp', [ ])
}());</script><script>(function() {
	angular.module('myApp')
       .controller('MyController', MyController);

function MyController(){

}
}());</script><script>(function() {
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
     ];
    return FriendsList;
  }
}());</script></body>
</html>`,
      //prompt 8
      `<html ng-app='myApp'>
        <head>
          <meta charset="utf-8">
      	<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
          <script type="text/javascript" src="example/app.js"></script>
          <script type="text/javascript" src="example/controller.js"></script>
          <script type="text/javascript" src="example/factory.js"></script>
        </head>
        <body>
      	<div ng-controller='MyController'></div>
        <script>(function() {
      	angular.module('myApp', [ ])
      }());</script><script>(function() {
      	angular.module('myApp')
             .controller('MyController', MyController);

         function MyController($scope) {
         $scope.name = "Bob";
         $scope.age = 30;
           $scope.occupation = 'hacker';

         }
      }());</script><script>(function() {
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
           ];
          return FriendsList;
        }
      }());</script></body>
      </html>`,
    //prompt 9
  `<html ng-app='myApp'>
    <head>
      <meta charset="utf-8">
  	<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
      <script type="text/javascript" src="example/app.js"></script>
      <script type="text/javascript" src="example/controller.js"></script>
      <script type="text/javascript" src="example/factory.js"></script>
    </head>
    <body>
  	<div ng-controller='MyController'>
    {{name}}
      {{age}}
      {{occupation}}
    </div>
    <script>(function() {
  	angular.module('myApp', [ ])
  }());</script><script>(function() {
  	angular.module('myApp')
         .controller('MyController', MyController);

     function MyController($scope) {
     $scope.name = "Bob";
     $scope.age = 30;
       $scope.occupation = 'hacker';

     }
  }());</script><script>(function() {
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
       ];
      return FriendsList;
    }
  }());</script></body>
  </html>`,
    //prompt 10
  `<html ng-app='myApp'>
    <head>
      <meta charset="utf-8">
  	<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
      <script type="text/javascript" src="example/app.js"></script>
      <script type="text/javascript" src="example/controller.js"></script>
      <script type="text/javascript" src="example/factory.js"></script>
    </head>
    <body>
  	<div ng-controller="MyController as myCtrl">
    {{name}}
      {{age}}
      {{occupation}}
    </div>
    <script>(function() {
  	angular.module('myApp', [ ])
  }());</script><script>(function() {
  	angular.module('myApp')
         .controller('MyController', MyController);

     function MyController($scope) {
     $scope.name = "Bob";
     $scope.age = 30;
       $scope.occupation = 'hacker';

     }
  }());</script><script>(function() {
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
       ];
      return FriendsList;
    }
  }());</script></body>
  </html>`,
      //prompt 11
    `<html ng-app='myApp'>
      <head>
        <meta charset="utf-8">
    	<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
        <script type="text/javascript" src="example/app.js"></script>
        <script type="text/javascript" src="example/controller.js"></script>
        <script type="text/javascript" src="example/factory.js"></script>
      </head>
      <body>
    	<div ng-controller="MyController as myCtrl">
      {{name}}
        {{age}}
        {{occupation}}
      </div>
      <script>(function() {
    	angular.module('myApp', [ ])
    }());</script><script>(function() {
    	angular.module('myApp')
           .controller('MyController', MyController);

       function MyController() {
       var vm = this;
       vm.name = "Bob";
       vm.age = 30;
       vm.occupation = 'hacker';

       }
    }());</script><script>(function() {
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
         ];
        return FriendsList;
      }
    }());</script></body>
    </html>`,
    //prompt 12
    `<html ng-app='myApp'>
      <head>
        <meta charset="utf-8">
    	<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
        <script type="text/javascript" src="example/app.js"></script>
        <script type="text/javascript" src="example/controller.js"></script>
        <script type="text/javascript" src="example/factory.js"></script>
      </head>
      <body>
    	<div ng-controller="MyController as myCtrl">
      {{myCtrl.name}}
      {{myCtrl.age}}
      {{myCtrl.occupation}}
      </div>
      <script>(function() {
    	angular.module('myApp', [ ])
    }());</script><script>(function() {
    	angular.module('myApp')
           .controller('MyController', MyController);

       function MyController() {
       var vm = this;
       vm.name = "Bob";
       vm.age = 30;
       vm.occupation = 'hacker';

       }
    }());</script><script>(function() {
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
         ];
        return FriendsList;
      }
    }());</script></body>
    </html>`,
      //prompt 13
    `<html ng-app='myApp'>
      <head>
        <meta charset="utf-8">
    	<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
        <script type="text/javascript" src="example/app.js"></script>
        <script type="text/javascript" src="example/controller.js"></script>
        <script type="text/javascript" src="example/factory.js"></script>
      </head>
      <body>
    	<div ng-controller="MyController as myCtrl">
      {{myCtrl.name}}
      {{myCtrl.age}}
      {{myCtrl.occupation}}
      </div>
      <script>(function() {
    	angular.module('myApp', [ ])
    }());</script><script>(function() {
    	angular.module('myApp')
           .controller('MyController', MyController);

       function MyController() {
       var vm = this;
       vm.name = "Bob";
       vm.age = 30;
       vm.occupation = 'hacker';

       }
    }());</script><script>(function() {
      angular.module('myApp')
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
         ];
        return FriendsList;
      }
    }());</script></body>
    </html>`,
    //prompt 14
    `<html ng-app='myApp'>
      <head>
        <meta charset="utf-8">
    	<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
        <script type="text/javascript" src="example/app.js"></script>
        <script type="text/javascript" src="example/controller.js"></script>
        <script type="text/javascript" src="example/factory.js"></script>
      </head>
      <body>
    	<div ng-controller="MyController as myCtrl">
      {{myCtrl.name}}
      {{myCtrl.age}}
      {{myCtrl.occupation}}
      </div>
      <script>(function() {
    	angular.module('myApp', [ ])
    }());</script><script>(function() {
    	angular.module('myApp')
           .controller('MyController', MyController);
    MyController.$inject = ["myFactory"]
       function MyController() {
       var vm = this;
       vm.name = "Bob";
       vm.age = 30;
       vm.occupation = 'hacker';

       }
    }());</script><script>(function() {
      angular.module('myApp')
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
         ];
        return FriendsList;
      }
    }());</script></body>
    </html>`,
    //prompt 15
    `<html ng-app='myApp'>
      <head>
        <meta charset="utf-8">
    	<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
        <script type="text/javascript" src="example/app.js"></script>
        <script type="text/javascript" src="example/controller.js"></script>
        <script type="text/javascript" src="example/factory.js"></script>
      </head>
      <body>
    	<div ng-controller="MyController as myCtrl">
      {{myCtrl.name}}
      {{myCtrl.age}}
      {{myCtrl.occupation}}
      </div>
      <script>(function() {
    	angular.module('myApp', [ ])
    }());</script><script>(function() {
    	angular.module('myApp')
           .controller('MyController', MyController);
    MyController.$inject = ["myFactory"]
       function MyController(myFactory) {
       var vm = this;
       vm.name = "Bob";
       vm.age = 30;
       vm.occupation = 'hacker';

       }
    }());</script><script>(function() {
      angular.module('myApp')
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
         ];
        return FriendsList;
      }
    }());</script></body>
    </html>`,
    //prompt 16
    `<html ng-app='myApp'>
      <head>
        <meta charset="utf-8">
    	<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
        <script type="text/javascript" src="example/app.js"></script>
        <script type="text/javascript" src="example/controller.js"></script>
        <script type="text/javascript" src="example/factory.js"></script>
      </head>
      <body>
    	<div ng-controller="MyController as myCtrl">
      {{myCtrl.name}}
      {{myCtrl.age}}
      {{myCtrl.occupation}}
      </div>
      <script>(function() {
    	angular.module('myApp', [ ])
    }());</script><script>(function() {
    	angular.module('myApp')
           .controller('MyController', MyController);
    MyController.$inject = ["myFactory"]
       function MyController(myFactory) {
       var vm = this;
       vm.list = myFactory;

       }
    }());</script><script>(function() {
      angular.module('myApp')
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
         ];
        return FriendsList;
      }
    }());</script></body>
    </html>`,
    //prompt 17
    `<html ng-app='myApp'>
      <head>
        <meta charset="utf-8">
    	<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
        <script type="text/javascript" src="example/app.js"></script>
        <script type="text/javascript" src="example/controller.js"></script>
        <script type="text/javascript" src="example/factory.js"></script>
      </head>
      <body>
    	<div ng-controller="MyController as myCtrl">
    {{myCtrl.list}}
      </div>
      <script>(function() {
    	angular.module('myApp', [ ])
    }());</script><script>(function() {
    	angular.module('myApp')
           .controller('MyController', MyController);
    MyController.$inject = ["myFactory"]
       function MyController(myFactory) {
       var vm = this;
       vm.list = myFactory;

       }
    }());</script><script>(function() {
      angular.module('myApp')
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
         ];
        return FriendsList;
      }
    }());</script></body>
    </html>`,
    //prompt 18
    `<html ng-app='myApp'>
      <head>
        <meta charset="utf-8">
    	<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
        <script type="text/javascript" src="example/app.js"></script>
        <script type="text/javascript" src="example/controller.js"></script>
        <script type="text/javascript" src="example/factory.js"></script>
      </head>
      <body>
    	<div ng-controller="MyController as myCtrl">
      {{myCtrl.list[0].name}}
      {{myCtrl.list[1].name}}
      {{myCtrl.list[2].name}}
      </div>
      <script>(function() {
    	angular.module('myApp', [ ])
    }());</script><script>(function() {
    	angular.module('myApp')
           .controller('MyController', MyController);
    MyController.$inject = ["myFactory"]
       function MyController(myFactory) {
       var vm = this;
       vm.list = myFactory;

       }
    }());</script><script>(function() {
      angular.module('myApp')
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
         ];
        return FriendsList;
      }
    }());</script></body>
    </html>`,
    //prompt 19
  `<html ng-app='myApp'>
    <head>
      <meta charset="utf-8">
  	<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
      <script type="text/javascript" src="example/app.js"></script>
      <script type="text/javascript" src="example/controller.js"></script>
      <script type="text/javascript" src="example/factory.js"></script>
    </head>
    <body>
  	<div ng-controller="MyController as myCtrl">
    <div></div>
    </div>
    <script>(function() {
  	angular.module('myApp', [ ])
  }());</script><script>(function() {
  	angular.module('myApp')
         .controller('MyController', MyController);
  MyController.$inject = ["myFactory"]
     function MyController(myFactory) {
     var vm = this;
     vm.list = myFactory;

     }
  }());</script><script>(function() {
    angular.module('myApp')
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
       ];
      return FriendsList;
    }
  }());</script></body>
  </html>`,
    //prompt 20
    `<html ng-app='myApp'>
      <head>
        <meta charset="utf-8">
    	<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
        <script type="text/javascript" src="example/app.js"></script>
        <script type="text/javascript" src="example/controller.js"></script>
        <script type="text/javascript" src="example/factory.js"></script>
      </head>
      <body>
    	<div ng-controller="MyController as myCtrl">
      <div ng-repeat="list in myCtrl.list"></div>
      </div>
      <script>(function() {
    	angular.module('myApp', [ ])
    }());</script><script>(function() {
    	angular.module('myApp')
           .controller('MyController', MyController);
    MyController.$inject = ["myFactory"]
       function MyController(myFactory) {
       var vm = this;
       vm.list = myFactory;

       }
    }());</script><script>(function() {
      angular.module('myApp')
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
         ];
        return FriendsList;
      }
    }());</script></body>
    </html>`,
    //prompt 21
    `<html ng-app='myApp'>
      <head>
        <meta charset="utf-8">
    	<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>
        <script type="text/javascript" src="example/app.js"></script>
        <script type="text/javascript" src="example/controller.js"></script>
        <script type="text/javascript" src="example/factory.js"></script>
      </head>
      <body>
    	<div ng-controller="MyController as myCtrl">
      <div ng-repeat="list in myCtrl.list">{{list.name}}</div>
      </div>
      <script>(function() {
    	angular.module('myApp', [ ])
    }());</script><script>(function() {
    	angular.module('myApp')
           .controller('MyController', MyController);
    MyController.$inject = ["myFactory"]
       function MyController(myFactory) {
       var vm = this;
       vm.list = myFactory;

       }
    }());</script><script>(function() {
      angular.module('myApp')
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
         ];
        return FriendsList;
      }
    }());</script></body>
    </html>`,
//prompt 22
'askldnaslkdasld'
    ];
  }
}
