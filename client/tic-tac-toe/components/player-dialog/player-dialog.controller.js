(function () {
    'use strict';
angular.module('ticTacToe')
    .controller('PlayerDialogController', ['$scope', 'players', '$uibModalInstance', '$rootScope', 'tickMatrix', function ($scope, players, $uibModalInstance, $rootScope, tickMatrix) {
        $scope.player = {
            playerOne: {
                name: '',
                sign: 'O'
            },

            playerTwo: {
                name: '',
                sign: 'X'
            }
        };

        $scope.startGame = function () {
            tickMatrix.createMatrix(3,3);
            players.setPlayers($scope.player);

            $rootScope.$broadcast('playerUpdate');
            $uibModalInstance.dismiss('cancel');
        };
    }]);
})();