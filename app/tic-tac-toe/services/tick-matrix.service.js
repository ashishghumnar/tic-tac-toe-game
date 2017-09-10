(function () {
    'use strict';

    angular.module('ticTacToe')
        .factory('tickMatrix', ['validateMatrix', function (validateMatrix) {
            var tickMatrix = {
                matrix: [],
                matrixSize: {
                    row: 0,
                    col: 0
                },
                played: {}
            };

            var _cloned = angular.copy(tickMatrix);

            function getLastPlayed() {
                return tickMatrix.played;
            }

            function updateTick(tickDetails) {
                tickMatrix.matrix = tickDetails.matrix;
                tickMatrix.played = tickDetails.player;

                localStorage.setItem('ticTacToe', JSON.stringify(tickMatrix));

                return validateMatrix.validate(tickDetails);
            }

            function resetTick() {
                tickMatrix = _cloned;

                return createMatrix(3, 3);
            }

            function getMatrix() {
                var ticTacToeItem = localStorage.getItem('ticTacToe');

                if (ticTacToeItem) {
                    tickMatrix = JSON.parse(ticTacToeItem);
                    return tickMatrix.matrix;
                }

                return tickMatrix.matrix;
            }

            function createMatrix(rowSize, colSize) {
                tickMatrix.matrix = [];

                tickMatrix.matrixSize.row = rowSize;
                tickMatrix.matrixSize.col = colSize;

                while (tickMatrix.matrixSize.row--) {
                    var matrixCol = [];
                    for (var j = 0; j < tickMatrix.matrixSize.col; j++) {
                        matrixCol.push(null);
                    }

                    tickMatrix.matrix.push(matrixCol);
                }

                return tickMatrix.matrix;
            }

            return {
                updateTick: updateTick,
                resetTick: resetTick,
                createMatrix: createMatrix,
                getMatrix: getMatrix,
                getLastPlayed: getLastPlayed
            }
        }]);
})();