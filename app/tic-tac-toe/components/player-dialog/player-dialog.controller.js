(function () {
    'use strict';
angular.module('ticTacToe')
    .controller('PlayerDialogController', ['$scope', 'players', '$uibModalInstance', '$rootScope', function ($scope, players, $uibModalInstance, $rootScope) {
        $scope.player = {};

        $scope.startGame = function () {
            players.setPlayers($scope.player);
            $rootScope.$broadcast('playerUpdate');
            $uibModalInstance.dismiss('cancel');
        };
    }]);
})();