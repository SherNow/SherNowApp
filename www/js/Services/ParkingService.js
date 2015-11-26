'use strict';

angular.module('shernow.services')
    .factory('Parkings', function ($http) {
        
        var getAll = function () {
                return [{nom : "Stationnement A" , adresse : "123 fausse rue"}];
        };
        
        
        return {getAll : getAll};
    });