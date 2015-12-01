'use strict';

angular.module('shernow.controllers')
    .controller('EventsController', function($scope, $stateParams, Events) {

        $scope.href = "#/tab/event/";
        $scope.listicon = "ion-android-calendar";
        $scope.listtitle = "Events";

        $scope.refresh = function(){

            Events.getAll().then(function(data) {
                $scope.data = data;
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        $scope.refresh();
    });