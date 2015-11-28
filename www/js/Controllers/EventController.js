'use strict';

angular.module('shernow.controllers')
.controller('EventController', function($scope, $stateParams, Events) {
    $scope.elem = Events.get($stateParams.CODEID);
});