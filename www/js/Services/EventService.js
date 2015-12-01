'use strict';

angular.module('shernow.services')
    .factory('Events', function ($http) {
        var events = [];
        var getAll = function () {
            return $http.get(baseApi + '/api/event/').then(function(result) {
                    events = _.map(result.data, function (data) { return new Event(data); } );
                    return events;
                }
            );
        };

        var get = function (id) {
            return _.find(events, function(event) { return event._id == id; });
        };


        return {
            getAll: getAll,
            get: get
        };
    });