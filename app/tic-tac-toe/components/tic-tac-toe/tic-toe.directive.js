angular.module('ticTacToe')
    .directive('ticTacToe', ['tickMatrix', '$uibModal', function (tickMatrix, $uibModal) {
        return {
            restrict: 'E',
            templateUrl: 'tic-tac-toe/components/tic-tac-toe/tic-toe.directive.html',
            scope: {
                players: "=",
                size: "="
            },
            link: function ($scope, el) {
                var matrix = tickMatrix.getMatrix(),
                    players = $scope.players;

                $scope.matrix = {
                    rows: matrix,
                    turn: tickMatrix.getLastPlayed().name === players.playerOne.name ? players.playerTwo.name : players.playerOne.name
                };

                $scope.cellClick = function (row, col) {
                    if (!$scope.won) {
                        var tr = el.find('tr')[row],
                            td = angular.element(tr).find('td')[col],
                            lastPlayed = tickMatrix.getLastPlayed();

                        var player = lastPlayed.name === players.playerOne.name ? players.playerTwo : players.playerOne;

                        $scope.matrix.rows[row][col] = player.sign;

                        $scope.matrix.turn = player.name === players.playerOne.name ? players.playerTwo.name : players.playerOne.name;

                        var isOver = tickMatrix.updateTick({
                            player: player,
                            matrix: $scope.matrix.rows
                        });

                        if (isOver) {
                            $scope.won = player.name;
                        }
                    } else {
                        alert("Gave Over, Please Restart");
                    }
                };

                $scope.restart = function () {
                    $scope.matrix.rows = tickMatrix.resetTick();
                    $scope.matrix.turn = players.playerOne.name;
                    $scope.won = null;
                };
            }
        }
    }]);