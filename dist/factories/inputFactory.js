"use strict";function inputFactory(n,t){function a(n){var a,r,c=t.counter;if(-5!==c&&n&&e.answers[c])return a=n.replace(/(\r\n|\n|\r|\;|\s)/g,"").replace(/(')/g,'"'),r=e.answers[c].replace(/(\r\n|\n|\r|\;|\s)/g,"").replace(/(')/g,'"'),r===a?!0:!1}function r(){return[0,"<html ng-app>\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n  <script></script><script></script><script>function myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app>\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body><input type=\"text\" ng-model=\"yourName\">\n  <script></script><script></script><script>function myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app>\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body><input type=\"text\" ng-model=\"yourName\"> {{yourName}}\n  <script></script><script></script><script>function myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app>\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n  <script></script><script></script><script>function myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n  <script></script><script></script><script>function myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n  <script>angular.module('myApp', [])</script><script></script><script>function myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n    <div ng-controller=\"MyController\"></div>\n  <script>angular.module('myApp', [])</script><script>angular.module('myApp')\n	.controller('MyController', MyController)\n\nfunction MyController() {}</script><script>function myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n    <div ng-controller=\"MyController\"></div>\n  <script>angular.module('myApp', [])</script><script>angular.module('myApp')\n	.controller('MyController', MyController)\n\nfunction MyController($scope) {\n$scope.name = \"Bob\";\n$scope.age = 30;\n  $scope.occupation = 'hacker';\n\n}</script><script>function myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n    <div ng-controller=\"MyController\">\n    {{name}}\n      {{age}}\n      {{occupation}}\n    </div>\n  <script>angular.module('myApp', [])</script><script>angular.module('myApp')\n	.controller('MyController', MyController)\n\nfunction MyController($scope) {\n$scope.name = \"Bob\";\n$scope.age = 30;\n  $scope.occupation = 'hacker';\n\n}</script><script>function myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n    <div ng-controller=\"MyController as myCtrl\">\n    {{name}}\n      {{age}}\n      {{occupation}}\n    </div>\n  <script>angular.module('myApp', [])</script><script>angular.module('myApp')\n	.controller('MyController', MyController)\n\nfunction MyController($scope) {\n$scope.name = \"Bob\";\n$scope.age = 30;\n  $scope.occupation = 'hacker';\n\n}</script><script>function myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n    <div ng-controller=\"MyController as myCtrl\">\n    {{name}}\n      {{age}}\n      {{occupation}}\n    </div>\n  <script>angular.module('myApp', [])</script><script>angular.module('myApp')\n	.controller('MyController', MyController)\n\nfunction MyController() {\n  var vm = this;\nvm.name = \"Bob\";\nvm.age = 30;\nvm.occupation = 'hacker';\n\n}</script><script>function myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n    <div ng-controller=\"MyController as myCtrl\">\n      {{myCtrl.name}}\n      {{myCtrl.age}}\n      {{myCtrl.occupation}}\n    </div>\n  <script>angular.module('myApp', [])</script><script>angular.module('myApp')\n	.controller('MyController', MyController)\n\nfunction MyController() {\n  var vm = this;\nvm.name = \"Bob\";\nvm.age = 30;\nvm.occupation = 'hacker';\n\n}</script><script>function myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n    <div ng-controller=\"MyController as myCtrl\">\n    {{myCtrl.name}}\n      {{myCtrl.age}}\n      {{myCtrl.occupation}}\n    </div>\n  <script>angular.module('myApp', [])</script><script>angular.module('myApp')\n	.controller('MyController', MyController)\n\nfunction MyController() {\n  var vm = this;\nvm.name = \"Bob\";\nvm.age = 30;\nvm.occupation = 'hacker';\n\n}</script><script>angular.module('myApp')\n	.factory('myFactory', myFactory);\n\nfunction myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n    <div ng-controller=\"MyController as myCtrl\">\n    {{myCtrl.name}}\n      {{myCtrl.age}}\n      {{myCtrl.occupation}}\n    </div>\n  <script>angular.module('myApp', [])</script><script>angular.module('myApp')\n	.controller('MyController', MyController)\n\nMyController.$inject = [\"myFactory\"]\n\nfunction MyController() {\n  var vm = this;\nvm.name = \"Bob\";\nvm.age = 30;\nvm.occupation = 'hacker';\n\n}</script><script>angular.module('myApp')\n	.factory('myFactory', myFactory);\n\n\nfunction myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n    <div ng-controller=\"MyController as myCtrl\">\n    {{myCtrl.name}}\n      {{myCtrl.age}}\n      {{myCtrl.occupation}}\n    </div>\n  <script>angular.module('myApp', [])</script><script>angular.module('myApp')\n	.controller('MyController', MyController)\n\nMyController.$inject = [\"myFactory\"]\n\nfunction MyController(myFactory) {\n  var vm = this;\nvm.name = \"Bob\";\nvm.age = 30;\nvm.occupation = 'hacker';\n}</script><script>angular.module('myApp')\n	.factory('myFactory', myFactory);\n\n\nfunction myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n    <div ng-controller=\"MyController as myCtrl\">\n    {{myCtrl.name}}\n      {{myCtrl.age}}\n      {{myCtrl.occupation}}\n    </div>\n  <script>angular.module('myApp', [])</script><script>angular.module('myApp')\n	.controller('MyController', MyController)\n\nMyController.$inject = [\"myFactory\"]\n\nfunction MyController(myFactory) {\n  var vm = this;\n  vm.list = myFactory;\n}</script><script>angular.module('myApp')\n	.factory('myFactory', myFactory);\n\n\nfunction myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n    <div ng-controller=\"MyController as myCtrl\">\n    {{myCtrl.list}}\n    </div>\n  <script>angular.module('myApp', [])</script><script>angular.module('myApp')\n	.controller('MyController', MyController)\n\nMyController.$inject = [\"myFactory\"]\n\nfunction MyController(myFactory) {\n  var vm = this;\n  vm.list = myFactory;\n}</script><script>angular.module('myApp')\n	.factory('myFactory', myFactory);\n\n\nfunction myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n    <div ng-controller=\"MyController as myCtrl\">\n          {{myCtrl.list[0].name}}\n          {{myCtrl.list[1].name}}\n          {{myCtrl.list[2].name}}\n    </div>\n  <script>angular.module('myApp', [])</script><script>angular.module('myApp')\n	.controller('MyController', MyController)\n\nMyController.$inject = [\"myFactory\"]\n\nfunction MyController(myFactory) {\n  var vm = this;\n  vm.list = myFactory;\n}</script><script>angular.module('myApp')\n	.factory('myFactory', myFactory);\n\n\nfunction myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n    <div ng-controller=\"MyController as myCtrl\">\n      <div></div>\n    </div>\n  <script>angular.module('myApp', [])</script><script>angular.module('myApp')\n	.controller('MyController', MyController)\n\nMyController.$inject = [\"myFactory\"]\n\nfunction MyController(myFactory) {\n  var vm = this;\n  vm.list = myFactory;\n}</script><script>angular.module('myApp')\n	.factory('myFactory', myFactory);\n\n\nfunction myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n    <div ng-controller=\"MyController as myCtrl\">\n      <div ng-repeat=\"list in myCtrl.list\"></div>\n    </div>\n  <script>angular.module('myApp', [])</script><script>angular.module('myApp')\n	.controller('MyController', MyController)\n\nMyController.$inject = [\"myFactory\"]\n\nfunction MyController(myFactory) {\n  var vm = this;\n  vm.list = myFactory;\n} </script><script>angular.module('myApp')\n	.factory('myFactory', myFactory);\n\n\nfunction myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","<html ng-app=\"myApp\">\n  <head>\n    <meta charset=\"utf-8\">\n    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>\n  </head>\n  <body>\n    <div ng-controller=\"MyController as myCtrl\">\n      <div ng-repeat=\"list in myCtrl.list\">{{list.name}}</div>\n    </div>\n  <script>angular.module('myApp', [])</script><script>angular.module('myApp')\n	.controller('MyController', MyController)\n\nMyController.$inject = [\"myFactory\"]\n\nfunction MyController(myFactory) {\n  var vm = this;\n  vm.list = myFactory;\n}  </script><script>angular.module('myApp')\n	.factory('myFactory', myFactory);\n\n\nfunction myFactory(){\n\n  var FriendsList = [\n    {'name':'Bryan',\n     'age': 30,\n     'pet': 'none'\n    },\n    {'name': 'Matt',\n     'age': 29,\n     'pet': 'nyan_cat'\n    },\n    {'name':'Daniel',\n     'age': 25,\n     'pet':'catdog'\n    }\n ]\n\n  return FriendsList;\n} </script></body>\n</html>","askldnaslkdasld"]}var e={};return e.checkInput=a,e.answers=r(),e}angular.module("app").factory("inputFactory",inputFactory),inputFactory.$inject=["$rootScope","promptFactory"];