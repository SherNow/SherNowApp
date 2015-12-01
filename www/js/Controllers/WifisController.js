'use strict';

angular.module('shernow.controllers')
    .controller('WifisController', function($scope, $stateParams, Wifis) {
        
        $scope.href = "#/tab/wifi/";
        $scope.listicon = "ion-wifi";
        $scope.listtitle = "Points d'accès Wi-Fi";
        
        $scope.refresh = function(){
            Wifis.getAll().then(function(data) {
                $scope.data = data;
                $scope.$broadcast('scroll.refreshComplete');
            });
        };
        
        $scope.refresh();
});