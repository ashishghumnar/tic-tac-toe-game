(function () {
    'use strict';
    angular.module('ticTacToe')
        .factory('players', [function () {
            var players = null;

            function setPlayers(playerlist) {
                players = playerlist;
            }

            function getPlayers() {
                return players;
            }

            return {
                setPlayers: setPlayers,
                getPlayers: getPlayers
            }
        }]);
})();