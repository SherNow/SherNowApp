'use strict';

angular.module('shernow.controllers')
    .controller('ParkingsController', function($scope, $stateParams, Parkings) {
            $scope.refresh = function(){
            Parkings.getAll().then(function(data) {
                $scope.data = data;
                $scope.$broadcast('scroll.refreshComplete');
            });
        }
        
        $scope.refresh();
       	
});