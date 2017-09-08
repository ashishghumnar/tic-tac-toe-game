(function () {
    'use strict';
    angular.module('myApp.gameView', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/gameView', {
                templateUrl: 'game-view/game-view.html',
                controller: function ($scope, players) {
                    $scope.$on('playerUpdate', function () {
                        $scope.players = players.getPlayers();
                    });
                }
            });
        }]);
})();