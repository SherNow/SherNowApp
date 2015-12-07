'use strict';

angular.module('shernow.controllers')
.controller('RestaurantController', function($scope, $stateParams, ModelFactory) {
    $scope.href = "#/tab/restaurant/";
    $scope.listtitle = "Restaurants similaires";
    $scope.listicon = "ion-android-restaurant";
        
    $scope.elem = ModelFactory.get("restaurant", $stateParams.restaurantId);
});