
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
  
  .state('tab.wifi', {
    url: '/wifi',
    views: {
      'tab-wifi': {
        templateUrl: 'templates/wifi.html',
        controller: 'WifiController'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/wifi');
});