   app.controller('FilmController', ['$scope', 'SwService', 'NgTableParams', '$uibModal', function($scope, SwService, NgTableParams, $uibModal){
        var self = this;
        $scope.films;
        $scope.status;

        $scope.animationsEnabled = true;
        
        $scope.showFilm = function (film) {
            var uibModalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'myModalItemContent.html',
              controller: 'ModalController',
              size: 'lg',
              resolve: {
                item: function () {
                  return film;
                }
              }
            });    
        }

        SwService.getFilms()
        .success(function (films) {
            $scope.films = films['results'];

            var tableData = $scope.films

            self.tableParams = new NgTableParams({ count: 5}, { counts: [5, 10, 25], dataset: tableData});
        })
        .error(function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });               
        
    }]);