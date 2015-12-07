'use strict';

angular.module('shernow.services', [])
.factory('ModelFactory', function ($http) {

       var restaurants = [];
       var wifis = [];
       var parkings = [];
       var events = [];
        
        var getAll = function (modelType) {
			if (modelType == "restaurant"){
                return $http.get(baseApi + '/api/restaurant/').then(function(result) {
                    restaurants = _.map(result.data, function (data) { return new Restaurant(data); } );
                    _.each(restaurants, function(restaurant){
                        setRelatedRestaurants(restaurant);
                    });
                    return restaurants;
                });
            } else if (modelType == "wifi"){
                return $http.get(baseApi + '/api/wifi/').then(function(result) {
                    wifis = _.map(result.data, function (data) { return new Wifi(data); } );
                    return wifis;
                });
            } else if (modelType == "parking"){
                return $http.get(baseApi + '/api/parking/').then(function(result) {
                    parkings = _.map(result.data, function(parking){ return new Parking(parking); });
                    return parkings;
                });
            } else if (modelType == "event"){
                return $http.get(baseApi + '/api/event/').then(function(result) {
                    events = _.map(result.data, function (data) { return new Event(data); } );
                    return events;
                });
            } else if (modelType = "garbage"){
                return $http.get(baseApi + '/api/garbage/' + postalCode)
                    .then(function(result) {
                        return result.data;
                    });
            }
        };

        var get = function (modelType, id) {
            if (modelType == "restaurant"){
                return _.find(restaurants, function(restaurant) { return restaurant.getId() == id; });
            } else if (modelType == "wifi"){
                return _.find(wifis, function(wifi) { return wifi._id == id; });
            } else if (modelType == "parking"){
                return _.find(parkings, function(parking) { return parking._id == id; });
            } else if (modelType == "event"){
                return _.find(events, function(event) { return event._id == id; });
            }
        };
        
        var setRelatedRestaurants = function(model){
            _.each(restaurants, function(restaurant){
                _.each(model.getCategories(), function(category){
                    if (_.contains(restaurant.getCategories(), category)){
                        model.addRelatedRestaurant(restaurant);
                    }
                });
            });
        }

        return {
            getAll: getAll,
            get: get,
        };
      
    });

var baseApi = 'http://localhost:3000';

var postalCode = localStorage.getItem('postalCode') || '';
