(function () {
    'use strict';

    angular.module('ticTacToe')
        .factory('validateMatrix', [function () {
            function validate(tickMatrix) {
                if (tickMatrix.length < 3) {
                    return false;
                }

                return visitColumn(tickMatrix) || visitRows(tickMatrix) || visitDiagonals(tickMatrix);
            }

            function visitColumn(tickMatrix, matrix) {
                var isValid = true;

                for (var item = 0 ; item <3 ; item++) {
                    var count = getPropertyCount(tickMatrix, 'col', item);
                    if (count === 3) {
                        isValid = true;
                        break;
                    } else {
                        isValid = false;
                    }
                }

                return isValid;
            }

            function visitRows(tickMatrix) {
                var isValid = true;

                for (var item = 0 ; item <3 ; item++) {
                    var count = getPropertyCount(tickMatrix, 'row', item);
                    if (count === 3) {
                        isValid = true;
                        break;
                    } else {
                        isValid = false;
                    }
                }

                return isValid;
            }

            function visitDiagonals(tickMatrix) {
                var count = 0;

                angular.forEach(tickMatrix, function (item) {
                    if (item.row === item.col) {
                        count++;
                    }
                });

                return count === 3;
            }

            function getPropertyCount(array, prop, value) {
                var filterArray = array.filter(function (item) {
                    return item[prop] === value;
                });

                return filterArray.length;
            }

            return {
                validate: validate
            }
        }]);
})();