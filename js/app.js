    var app = angular.module('main', ['ngRoute', 'ngTable', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'views/films.html',
                    controller: 'FilmController',
                    controllerAs: 'vm'
                }).
                when('/characters', {
                    templateUrl: 'views/characters.html',
                    controller: 'CharacterController'
                })
                /*when('/:section/:article', {
                    templateUrl: function ($routeParams) {
                        return 'views/' + $routeParams.section + '/' + $routeParams.article + '.html';
                    },
                    controller: function () {

                    }
                })*/;
        }]);
