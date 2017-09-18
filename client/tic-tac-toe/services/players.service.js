(function () {
    'use strict';
    angular.module('ticTacToe')
        .factory('players', [function () {
            var players = null;

            function setPlayers(playerlist) {
                localStorage.setItem('ticTacToePlayers', JSON.stringify(playerlist));

                players = playerlist;
            }

            function getPlayers() {
                return players || JSON.parse(localStorage.getItem('ticTacToePlayers'));
            }

            return {
                setPlayers: setPlayers,
                getPlayers: getPlayers
            }
        }]);
})();