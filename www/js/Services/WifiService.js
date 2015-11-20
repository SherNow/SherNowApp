'use strict';

angular.module('shernow.services')
    .factory('Wifis', function ($http) {
        var wifis = [];
        
        /**
         * Return a list of wifis informations
         * @returns {*} Promise that will be resolved to a array containing all wifis informations when the request
         * succeeds or fails.
         */
        var getAll = function () {
            return $http.get(baseApi + '/api/wifi/')
                .then(function(result) {
                    wifis = result.data;
                    return result.data;
                });
        };

        /**
         * Return a specific wifi object
         * @param id wifi id
         * @returns {*}
         */
        var get = function (id) {
            if (wifis.length == 0){
                redirectToWifis();
            }
            return _.find(wifis, function(wifi){ return wifi._id == id; });
        };

        return {
            getAll: getAll,
            get: get
        };
    });