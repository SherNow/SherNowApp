'use strict';

angular.module('shernow.services')
    .factory('Parkings', function ($http) {
        var parkings = [];
        
        var getAll = function () {
            return $http.get(baseApi + '/api/parking/').then(function(result) {
                parkings = result.data;
                return parkings;
            });
        };
        
        var get = function (id) {
            return _.find(parkings, function(parking) { return parking._id == id; });
        };
        
        
        return {
            getAll: getAll,
            get: get
        };
    });