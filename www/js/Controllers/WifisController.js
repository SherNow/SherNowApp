'use strict';

angular.module('shernow.controllers')
    .controller('WifisController', function($scope, $stateParams, $cordovaGeolocation, Wifis) {
        
        $scope.href = "#/tab/wifi/";
        $scope.listicon = "ion-wifi";
        $scope.listtitle = "Points d'accès Wi-Fi"
        
        $scope.refresh = function(){
                //$cordovaGeolocation.getCurrentPosition({timeout: 10000, enableHighAccuracy: false})
                   // .then(function (position) {
                        Wifis.getAll().then(function(data) {
                            $scope.data = data;
                            $scope.$broadcast('scroll.refreshComplete');
                        });
                    //}, function(err) {
            //});
        };
        
        $scope.refresh();
});