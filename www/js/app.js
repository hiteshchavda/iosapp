angular.module('lodash', []).factory('_', function() {
  return window._; // assumes lodash has already been loaded on the page
});

angular.module('wafflebay', [
  'lodash',
  'ionic',
  'ui.select',
  'toggle-switch',
  'components',
  'wafflebay.controllers'
])

.run(function($ionicPlatform) {
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
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
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

    .state('app.about', {
      url: '/about',
      views: {
        'content': {
          templateUrl: 'templates/about.html'
        }
      }
    })

    .state('app.menu', {
      url: '/menu',
      views: {
        'content': {
          templateUrl: 'templates/menu.html',
          controller: 'MenuCtrl'
        }
      }
    })

    .state('app.reviews', {
      url: '/reviews',
      views: {
        'content': {
          templateUrl: 'templates/reviews.html'
        }
      }
    })

    .state('app.offers', {
      url: '/offers',
      views: {
        'content': {
          templateUrl: 'templates/offers.html'
        }
      }
    })

    .state('app.facebook', {
      url: '/facebook',
      views: {
        'content': {
          templateUrl: 'templates/facebook.html'
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

    .state('app.placeorder', {
      url: '/placeorder',
      views: {
        'content': {
          templateUrl: 'templates/placeorder.html',
          controller: 'PlaceOrderCtrl'
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

    .state('app.contact', {
      url: '/contact',
      views: {
        'content': {
          templateUrl: 'templates/contact.html'
        }
      }
    })

    .state('app.myaccount', {
      url: '/myaccount',
      views: {
        'content': {
          templateUrl: 'templates/myaccount.html'
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

    .state('app.mynotifications', {
      url: '/mynotifications',
      views: {
        'content': {
          templateUrl: 'templates/mynotifications.html',
          controller: 'MyNotificationsCtrl'
        }
      }
    })
  ;


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
