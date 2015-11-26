'use strict';

angular.module('shernow.controllers')
    .controller('RestaurantsController', function($scope, $stateParams, Restaurants) {
                  
        $scope.href = "#/tab/restaurant/";
        $scope.listicon = "ion-android-restaurant";
        $scope.listtitle = "Restaurants"
        
        $scope.refresh = function(){
            Restaurants.getAll().then(function(data) {
                $scope.data = data;
                $scope.$broadcast('scroll.refreshComplete');
            });
        }
        
        $scope.refresh();
            
       	
});