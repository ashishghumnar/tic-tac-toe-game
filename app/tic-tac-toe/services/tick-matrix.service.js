(function () {
    'use strict';

    angular.module('ticTacToe')
        .factory('tickMatrix', ['validateMatrix', function (validateMatrix) {
            var tickMatrix = {};

            function updateTick(tickDetails) {
                if (!tickMatrix[tickDetails.user]) {
                    tickMatrix[tickDetails.user] = [];
                    tickMatrix[tickDetails.user].push(tickDetails.tick);
                } else {
                    tickMatrix[tickDetails.user].push(tickDetails.tick);
                }

                return validateMatrix.validate(tickMatrix[tickDetails.user]);
            }

            return {
                updateTick: updateTick
            }
        }]);
})();