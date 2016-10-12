app.factory('SwService', ['$http', function($http) {

    var urlBase = 'http://swapi.co/api';

    this.getFilms = function () {
        return $http.get(urlBase+'/films');
    };

    this.getCharacters = function (page) {
    	return $http.get(urlBase+'/people/?page='+page);
    };

    return this;
}]);
