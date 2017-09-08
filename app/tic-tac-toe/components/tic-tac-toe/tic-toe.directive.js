angular.module('ticTacToe')
    .directive('ticTacToe', ['tickMatrix', function (tickMatrix) {
        return {
            restrict: 'E',
            templateUrl: 'tic-tac-toe/components/tic-tac-toe/tic-toe.directive.html',
            scope: {
                players: "="
            },
            link: function ($scope, el) {
                var current = 1;

                $scope.cellClick = function (row, col) {
                    var players = $scope.players;

                    if (!$scope.won) {
                        var tr = el.find('tr')[row],
                            td = angular.element(tr).find('td')[col],
                            user = current % 2 ? players.playerOne : players.playerTwo;

                        //check for even or odd
                        if (user === players.playerOne) {
                            $scope.turn = players.playerTwo;
                            angular.element(td).append('<span>o</span>');
                        } else {
                            $scope.turn = players.playerOne;
                            angular.element(td).append('<span>x</span>');
                        }

                        current++;

                        var isOver = tickMatrix.updateTick({
                            user: user,
                            tick: {
                                row: row,
                                col: col
                            }
                        });

                        if (isOver) {
                            $scope.won = user;
                        }
                    } else {
                        alert("Gave Over, Please Restart");
                    }
                };
            }
        }
    }]);