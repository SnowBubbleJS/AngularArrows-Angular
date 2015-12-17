(function(){
  angular
    .module('app')
    .controller('NewModalCtrl', NewModalCtrl);

    function NewModalCtrl ($mdDialog, $mdMedia) {
      var vm = this;
      var tieThisToPromptFactoryCounter = 1;
      // vm.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

      vm.openModal = function(ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && vm.customFullscreen;

        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'htmltemplates/prompt' + tieThisToPromptFactoryCounter + '.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: useFullScreen
        });
        tieThisToPromptFactoryCounter++;
        // vm.$watch(function() {
        //   return $mdMedia('xs') || $mdMedia('sm');
        // }, function(wantsFullScreen) {
        //   vm.customFullscreen = (wantsFullScreen === true);
        // });

      };
    }

  function DialogController($mdDialog) {
    var vm = this;
    vm.hide = function() {
      $mdDialog.hide();
    };

    vm.cancel = function() {
      $mdDialog.cancel();
    };

    vm.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }

}());
