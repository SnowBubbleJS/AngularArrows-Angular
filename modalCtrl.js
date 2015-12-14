(function(){
  angular
  .module('app')
  .controller('ModalCtrl', function ($modal, $log) {
    var vm = this;
    vm.items = ['item1', 'item2', 'item3'];
    vm.open = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'tutorialContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return vm.items;
          }
        }
      });
      modalInstance.result.then(function (selectedItem) {
        vm.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular
  .module('app')
    .controller('ModalInstanceCtrl', function ($modalInstance, items) {
    var vm = this;
    vm.items = items;
    vm.selected = {
      item: vm.items[0]
    };
    vm.ok = function () {
      $modalInstance.close(vm.selected.item);
    };
    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
}());
