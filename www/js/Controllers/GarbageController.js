'use strict';

angular.module('shernow.controllers')
    .controller('GarbageController', function($scope, $stateParams, $ionicModal, ModelFactory) {
        $scope.garbage = '';
        var regex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
    
        $scope.refresh = function(){
             ModelFactory.getAll("garbage").then(function(garbage) {
                $scope.garbage = garbage;
             });
        };
        
        // postal code not set state
        var postalCodeUnset = function(handler){
            this.handler = handler;
            
            this.refresh = function(){
                $scope.postalCode = postalCode;
                $scope.showForm();
            }
            
            this.cancel = function(){
                
            }
            
            this.closeForm = function(){
                
            }
        }
        
        // postal code set state
        var postalCodeSet = function(handler){
            this.handler = handler;
            
            this.refresh = function(){
                $scope.postalCode = postalCode;
                $scope.refresh();
            }
            
            this.cancel = function(){
                $scope.modal.hide();
            }
            
            this.closeForm = function(){
                this.cancel();
            }
        }
        
        $ionicModal.fromTemplateUrl('templates/postalcode.html' , {scope: $scope, hardwareBackButtonClose: false, backdropClickToClose: false, focusFirstInput: true}).then(function (modal) {
           $scope.modal = modal;
           
           // state handler
           var postalCodeHandler = function(){
                var currentState = postalCode == '' ? new postalCodeUnset(this) : new postalCodeSet(this);
                
                this.change = function (state) {
                    currentState = state;
                    this.refresh();
                };
                
                this.refresh = function(){
                    currentState.refresh();
                };
                
                this.cancel = function(){
                    currentState.cancel();
                };
                
                this.closeForm = function(){
                    currentState.closeForm();
                };
            }
            
            $scope.handler = new postalCodeHandler();
            $scope.handler.refresh();
        });
        
        $scope.validatePostalCode = function(postalCode){
            return !regex.test(postalCode);
        };
        
        $scope.showForm = function(){
            $scope.modal.show();
        };
        
        $scope.submitPostalCode = function(code){
            postalCode = code.toUpperCase();
            
            if (postalCode.length == 7){
                postalCode = postalCode.substring(0,3) + postalCode.substring(4, 7);
            }
            
            localStorage.setItem('postalCode', postalCode);
            $scope.handler.change(new postalCodeSet());
            $scope.handler.closeForm();
        }
});