'use strict';

angular.module('shernow.controllers')
    .controller('EventsController', function($scope, $stateParams, Events) {
        $scope.href = "#/tab/event/";
        $scope.listicon = "ion-android-calendar";
        $scope.listtitle = "Events"
        
    $scope.refresh = function(){
            
                $scope.data = Events.getAll();
                $scope.$broadcast('scroll.refreshComplete');
            };
        
        $scope.refresh();
});