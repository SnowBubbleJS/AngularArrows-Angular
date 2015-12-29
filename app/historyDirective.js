angular.module('app')
       .directive('foobar', [function factory() {
            return {
               restrict: 'E',
               replace: true,
               templateUrl: 'htmltemplates/prompt5.html',
               scope: {
                   "var": "="
               }
           };
       }]);
