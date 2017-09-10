(function () {
    'use strict';
    angular.module('myApp.gameView', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/gameView', {
                templateUrl: 'game-view/game-view.html',
                controller: function ($scope, players) {
                    if (players.getPlayers()) {
                        $scope.players = players.getPlayers();
                    } else {
                        $scope.$on('playerUpdate', function () {
                            $scope.players = players.getPlayers();
                        });
                    }
                }
            });
        }]);
})();