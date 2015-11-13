'use strict';

angular.module('shernow.controllers')
    .controller('WifisController', function($scope, $stateParams, Wifis) {
        Wifis.getAll().then(function(wifis) {
            $scope.wifis = wifis;
        });
    });