angular.module('lodash', []).factory('_', function() {
  return window._; // assumes lodash has already been loaded on the page
});

angular.module('wafflebay', [
  'lodash',
  'ionic',
  'ui.select',
  'toggle-switch',
  'tabSlideBox',
  'common.directives',
  'wafflebay.controllers'
])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });


  // TODO: remove the test codes below in production version.
  $rootScope.cities = [
    {id: 1, name: 'MUMBAI'},
    {id: 2, name: 'SECOND'},
    {id: 3, name: 'THIRD'},
    {id: 4, name: 'FOURTH'},
    {id: 5, name: 'FIFTH'},
    {id: 6, name: 'SIXTH'},
    {id: 7, name: 'SEVENTH'},
    {id: 8, name: 'EIGHTH'},
    {id: 9, name: 'NINETH'},
    {id: 10, name: 'TENTH'}
  ];


  $rootScope.atabs = [
    {"text" : "ORDERS"},
    {"text" : "NOTIFICATIONS"}
  ];

  $rootScope.btabs = [
    {"text" : "MUMBAI"},
    {"text" : "DELHI"},
    {"text" : "HYDERA"},
    {"text" : "Napeon"}
  ];

  $rootScope.options = {
    showpager: false,
    loop: true
  };
  //$rootScope.slider

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

    .state('chooseloc', {
      url: '/chooseloc',
      templateUrl: 'templates/chooseloc.html',
      controller: 'ChooseLocCtrl'
    })

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/app.html',
      controller: 'AppCtrl'
    })


    .state('app.home', {
      url: '/home',
      views: {
        'content': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.orderonline', {
      url: '/orderonline',
      views: {
        'content': {
          templateUrl: 'templates/orderonline.html',
          controller: 'OrderOnlineCtrl'
        }
      }
    })

    .state('app.about', {
      url: '/about',
      views: {
        'content': {
          templateUrl: 'templates/about.html',
          controller: 'AboutCtrl'
        }
      }
    })

    .state('app.locations', {
      url: '/locations',
      views: {
        'content': {
          templateUrl: 'templates/locations.html'
        }
      }
    })

    .state('app.myaccount', {
      url: '/myaccount',
      views: {
        'content': {
          templateUrl: 'templates/myaccount.html',
          controller: 'MyAccountCtrl'
        }
      }
    })

    .state('app.settings', {
      url: '/settings',
      views: {
        'content': {
          templateUrl: 'templates/settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })






    .state('app.placeorder', {
      url: '/placeorder',
      views: {
        'content': {
          templateUrl: 'templates/placeorder.html',
          controller: 'PlaceOrderCtrl'
        }
      }
    })

  ;


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
