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
                _.each(restaurants, function(restaurant){
                    setRelated(restaurant);
                });
                return restaurants;
            });
        };

        /**
         * Return a specific wifi object
         * @param id wifi id
         * @returns {*}
         */
        var get = function (id) {
            return _.find(restaurants, function(restaurant) { return restaurant.getId() == id; });
        };
        
        var setRelated = function(model){
            _.each(restaurants, function(restaurant){
                _.each(model.getCategories(), function(category){
                    if (_.contains(restaurant.getCategories(), category)){
                        model.addRelatedRestaurant(restaurant);
                    }
                });
            });
        }
        
        var getCategories = function(){
            return [{
                "ID": 1,
                "Nom": "Chefs créateurs",
                "ParentID": -1
            }, {
                "ID": 2,
                "Nom": "Pubs et microbrasseries",
                "ParentID": -1
            }, {
                "ID": 3,
                "Nom": "DÃ©lices d'ici",
                "ParentID": -1
            }, {
                "ID": 4,
                "Nom": "Restaurants",
                "ParentID": -1
            }, {
                "ID": 5,
                "Nom": "Bonnes tables",
                "ParentID": 4
            }, {
                "ID": 6,
                "Nom": "Cafés & Bistros",
                "ParentID": 4
            }, {
                "ID": 7,
                "Nom": "Saveurs du monde",
                "ParentID": 4
            }, {
                "ID": 8,
                "Nom": "Brasseries",
                "ParentID": 4
            }, {
                "ID": 9,
                "Nom": "Cuisine familiale",
                "ParentID": 4
            }, {
                "ID": 10,
                "Nom": "Restauration rapide",
                "ParentID": 4
            }];
        }

        return {
            getAll: getAll,
            get: get,
            getCategories : getCategories
        };
      
    });
