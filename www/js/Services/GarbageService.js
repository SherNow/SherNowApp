'use strict';

angular.module('shernow.services')
    .factory('Garbage', function ($http) {
       
        var get = function () {
            
            return $http.get(baseApi + '/api/garbage/')
                .then(function(result) {
                    return result.data;
                });
        };

        return {
            get: get
        };
    });