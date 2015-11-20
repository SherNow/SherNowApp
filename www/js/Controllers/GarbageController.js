'use strict';

angular.module('shernow.controllers')
    .controller('GarbageController', function($scope, $stateParams, $ionicModal, Garbage) {
        $scope.postalCode = localStorage.getItem('postalCode') || '';
        $scope.garbage = '';
        var regex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
        $scope.refresh = function(){
             Garbage.getAll().then(function(garbage) {
            $scope.garbage = garbage;
        });
        };
        $ionicModal.fromTemplateUrl('templates/postalcode.html' , {scope: $scope, hardwareBackButtonClose: false, backdropClickToClose: false, focusFirstInput: true}).then(function (modal) {
            $scope.modal = modal;
           if ($scope.postalCode == ''){
               modal.show();
           }
           else {
                   $scope.refresh();
           }
            
        });
        
        $scope.validatePostalCode = function(postalCode){
            return !regex.test(postalCode);
        };
        
        $scope.submitPostalCode = function(postalCode){
            postalCode = postalCode.toUpperCase();
            
            if(postalCode.length == 6){
                postalCode = postalCode.substring(0,3) + ' ' + postalCode.substring(3,6);
            }
            localStorage.setItem('postalCode', postalCode);
            $scope.modal.hide();
            $scope.refresh();
        }
        
        
        
        
        
        
        
    });