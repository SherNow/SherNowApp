'use strict';

angular.module('shernow.controllers')
    .controller('GarbageController', function($scope, $stateParams, $ionicModal, Garbage) {
        $scope.garbage = '';
        $scope.postalCodeSet = false;
        
        var regex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
        
        $scope.refresh = function(){
             Garbage.get().then(function(garbage) {
                $scope.garbage = garbage;
                $scope.postalCodeSet = true;
             });
        };
        
        $ionicModal.fromTemplateUrl('templates/postalcode.html' , {scope: $scope, hardwareBackButtonClose: false, backdropClickToClose: false, focusFirstInput: true}).then(function (modal) {
           $scope.modal = modal;
           if (postalCode == ''){
               $scope.showForm();
           }
           else {
               $scope.refresh();
           }
        });
        
        $scope.showForm = function(){
            $scope.postalCode = postalCode;
            $scope.modal.show();
        };
        
        $scope.closeForm = function(){
            $scope.modal.hide();
        };
        
        $scope.validatePostalCode = function(postalCode){
            return !regex.test(postalCode);
        };
        
        $scope.submitPostalCode = function(code){
            code = code.toUpperCase();
            
            if (code.length == 7){
                code = code.substring(0,3) + code.substring(4, 7);
            }
            
            localStorage.setItem('postalCode', code);
            postalCode = code;
            $scope.closeForm();
            $scope.refresh();
        }
});