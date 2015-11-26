'use strict';

angular.module('shernow.services')
    .factory('Restaurants', function ($http) {

       var restaurants = [];
        
        /**
         * Return a list of wifis informations
         * @returns {*} Promise that will be resolved to a array containing all wifis informations when the request
         * succeeds or fails.
         */
        var getAll = function () {
            return $http.get(baseApi + '/api/restaurant/').then(function(result) {
                restaurants = _.map(result.data, function (data) { return new Restaurant(data); } );
                return restaurants;
            });
        };

        /**
         * Return a specific wifi object
         * @param id wifi id
         * @returns {*}
         */
        var get = function (id) {
            return _.find(restaurants, function(restaurant) { return restaurant._id == id; });
        };

        return {
            getAll: getAll,
            get: get
        };
      
    });
