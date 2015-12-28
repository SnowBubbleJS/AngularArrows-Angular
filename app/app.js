angular
  .module('app', ['ngMaterial', 'ui.codemirror', 'ngMdIcons', 'angular-intro'])
  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
});
