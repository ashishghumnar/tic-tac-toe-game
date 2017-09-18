(function () {
    'use strict';

    angular.module('ticTacToe')
        .factory('validateMatrix', [function () {
            function validate(tickMatrix) {
                return visitRowsAndColumns(tickMatrix) || visitDiagonals(tickMatrix);
            }

            function visitRowsAndColumns(tickMatrix) {
                var matrix = tickMatrix.matrix,
                    matrixLength = matrix.length,
                    sign = tickMatrix.player.sign,
                    isValidRow = true,
                    isValidColumn = true;

                while (matrixLength--) {
                    var matrixRow = matrix[matrixLength],
                        matrixRowLength = matrixRow.length;

                    isValidRow = true;
                    isValidColumn = true;

                    while (matrixRowLength--) {
                        if (matrixRow[matrixRowLength] !== sign) {
                            isValidRow = false;
                        }

                        if (matrix[matrixRowLength][matrixLength] !== sign) {
                            isValidColumn = false;
                        }
                    }

                    if (isValidRow || isValidColumn) {
                        break;
                    }
                }

                return isValidRow || isValidColumn;
            }

            function visitDiagonals(tickMatrix) {
                var matrix = tickMatrix.matrix,
                    matrixLength = matrix.length,
                    sign = tickMatrix.player.sign,
                    isValidRightDiagonal = true,
                    isValidLeftDiagonal = true;

                while (matrixLength--) {
                    var row = matrix[matrixLength],
                        rowLength = row.length;

                    while (rowLength--) {
                        var rowDiff = rowLength > matrixLength ? rowLength - matrixLength : matrixLength - rowLength;

                        if (rowLength == matrixLength && matrix[rowLength][matrixLength] !== sign) {
                            isValidRightDiagonal = false;
                        }

                        if (matrix[matrixLength][rowDiff] !== sign) {
                            isValidLeftDiagonal = false;
                        }
                    }
                }

                return isValidRightDiagonal || isValidLeftDiagonal;
            }

            return {
                validate: validate
            }
        }]);
})();