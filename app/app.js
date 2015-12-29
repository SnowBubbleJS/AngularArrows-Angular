angular
  .module('app', ['nzTour','ngMaterial', 'ui.codemirror', 'ngMdIcons'])
  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
});
