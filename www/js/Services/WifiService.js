'use strict';

angular.module('shernow.services')
    .factory('Wifis', function ($http) {

        /**
         * Return a list of wifis informations
         * @returns {*} Promise that will be resolved to a array containing all wifis informations when the request
         * succeeds or fails.
         */
        var getAll = function () {
            return $http.get(baseApi + '/api/wifi/')
                .then(function(result) {
                    return result.data;
                });
        };

        /**
         * Return a specific wifi object
         * @param id wifi id
         * @returns {*}
         */
        var get = function (id) {
            return $http.get(baseApi + '/api/wifi/' + id)
                .then(function(result) {
                    return result.data;
                });
        };

        return {
            getAll: getAll,
            get: get
        };
    });