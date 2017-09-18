(function () {
    'use strict';
// Declare app level module which depends on views, and components
    angular.module('myApp', [
        'ngRoute',
        'ticTacToe',
        'ui.bootstrap',
        'myApp.gameView'
    ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider, $modalProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/gameView'});
    }]);
})();