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
            return $http.get(baseApi + '/api/wifi/').then(function(result) {
                wifis = _.map(result.data, function (data) { return new Wifi(data); } );
                return wifis;
            });
        };

        /**
         * Return a specific wifi object
         * @param id wifi id
         * @returns {*}
         */
        var get = function (id) {
            return _.find(wifis, function(wifi) { return wifi._id == id; });
        };

        return {
            getAll: getAll,
            get: get
        };
    });