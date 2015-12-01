'use strict';

angular.module('shernow.controllers')
.controller('RestaurantController', function($scope, $stateParams, Restaurants) {
    $scope.href = "#/tab/restaurant/";
    $scope.listicon = "ion-android-restaurant";
        
    $scope.elem = Restaurants.get($stateParams.restaurantId);
});