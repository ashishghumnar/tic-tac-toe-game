(function () {
    'use strict';

    angular.module('ticTacToe', [])
        .run(['$uibModal', '$rootScope', 'players', function ($uibModal, $rootScope, players) {
            if (!players.getPlayers()) {
                var modalInstace = $uibModal.open({
                    backdrop: 'static',
                    templateUrl: 'tic-tac-toe/components/player-dialog/player-dialog.html',
                    controller: 'PlayerDialogController',
                    resolve: {},
                    windowClass: 'tic-tac-toe',
                    keyboard: false
                });
            } else {
                $rootScope.$broadcast('playerUpdate');
            }
        }]);
})();