'use strict';

angular.module('shernow.controllers')
    .controller('ParkingsController', function($scope, $stateParams, ModelFactory) {
       
       $scope.href = "#/tab/parking/";
       $scope.listicon = "ion-android-car";
       $scope.listtitle = "Stationnements"
        
       $scope.refresh = function(){
            ModelFactory.getAll("parking").then(function(data) {
                $scope.data = data;
                $scope.$broadcast('scroll.refreshComplete');
            });
        }
        
        $scope.refresh();
       	
});