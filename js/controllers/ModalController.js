app.controller('ModalController', ['$scope', '$uibModalInstance', 'item', function($scope, $uibModalInstance, item){

  $scope.film = item;
  $scope.character = item;

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);

