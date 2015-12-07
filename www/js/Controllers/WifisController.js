'use strict';

angular.module('shernow.controllers')
    .controller('WifisController', function($scope, $stateParams, ModelFactory) {
        
        $scope.href = "#/tab/wifi/";
        $scope.listicon = "ion-wifi";
        $scope.listtitle = "Points d'accès Wi-Fi";
        
        $scope.refresh = function(){
            ModelFactory.getAll("wifi").then(function(data) {
                $scope.data = data;
                $scope.$broadcast('scroll.refreshComplete');
            });
        };
        
        $scope.refresh();
});