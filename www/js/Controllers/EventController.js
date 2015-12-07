'use strict';

angular.module('shernow.controllers')
.controller('EventController', function($scope, $stateParams, ModelFactory) {
    $scope.elem = ModelFactory.get("event", $stateParams.eventId);
});