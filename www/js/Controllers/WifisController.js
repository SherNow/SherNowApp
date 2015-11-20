'use strict';

angular.module('shernow.controllers')
    .controller('WifisController', function($scope, $stateParams, $ionicHistory, Wifis) {
        $ionicHistory.clearHistory();
        
        $scope.refresh = function(){
            Wifis.getAll().then(function(wifis) {
                $scope.wifis = wifis;
                $scope.$broadcast('scroll.refreshComplete');
            });
        }
        
        $scope.refresh();
});