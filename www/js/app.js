'use strict';

angular.module('shernow', ['ionic', 'shernow.controllers', 'shernow.services'])

    .run(function($ionicPlatform, $rootScope) {
        $ionicPlatform.ready(function() {

            $rootScope._ = window._;

            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })
            .state('tab.wifis', {
                url: '/wifi',
                views: {
                    'tab-wifi': {
                        templateUrl: 'templates/list.html',
                        controller: 'WifisController'
                    }
                }
            })
            .state('tab.wifi', {
                url: '/wifi/:wifiId',
                cache : false,
                views: {
                    'tab-wifi': {
                        templateUrl: 'templates/item.html',
                        controller: 'WifiController'
                    }
                }
            })
            .state('tab.garbage', {
                url: '/garbage',
                views: {
                    'tab-garbage': {
                        templateUrl: 'templates/garbage.html',
                        controller: 'GarbageController'
                    }
                }
            })
            .state('tab.restaurants', {
                url: '/restaurant',
                views: {
                    'tab-restaurant': {
                        templateUrl: 'templates/restaurant.html',
                        controller: 'RestaurantsController'
                    }
                }
            })
            .state('tab.restaurant', {
                url: '/restaurant/:restaurantId',
                views: {
                    'tab-restaurant': {
                        templateUrl: 'templates/item.html',
                        controller: 'RestaurantController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/tab/wifi');
    });
