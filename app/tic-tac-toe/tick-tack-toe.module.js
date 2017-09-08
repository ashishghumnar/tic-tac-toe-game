(function () {
    'use strict';

    angular.module('ticTacToe', [])
        .run(['$uibModal', function ($uibModal) {
            var modalInstace = $uibModal.open({
                backdrop: 'static',
                templateUrl: 'tic-tac-toe/components/player-dialog/player-dialog.html',
                controller: 'PlayerDialogController',
                resolve: {},
                windowClass: 'tic-tac-toe',
                keyboard: false
            });
        }]);
})();