app.controller('CharacterController', ['$scope', 'SwService', 'NgTableParams', '$uibModal', function($scope, SwService, NgTableParams, $uibModal){
    var self = this;
    $scope.characters = new Array();
    $scope.status;
    $scope.page = 0;

    $scope.animationsEnabled = true;
    
    $scope.loadMoreCharacters = function() {
        $scope.page++;
        SwService.getCharacters($scope.page)
        .success(function (characters) {
            $scope.characters = $scope.characters.concat(characters['results']);
        })
        .error(function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
    }

    $scope.loadMoreCharacters();


    $scope.showCharacter = function (character) {
        var uibModalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'CharacterModalContent.html',
          controller: 'ModalController',
          size: 'lg',
          resolve: {
            item: function () {
              return character;
            }
          }
        });    
    }

}]);