angular.module('wafflebay.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //// Form data for the login modal
  //$scope.loginData = {};
  //
  //// Create the login modal that we will use later
  //$ionicModal.fromTemplateUrl('templates/login.html', {
  //  scope: $scope
  //}).then(function(modal) {
  //  $scope.modal = modal;
  //});
  //
  //// Triggered in the login modal to close it
  //$scope.closeLogin = function() {
  //  $scope.modal.hide();
  //};
  //
  //// Open the login modal
  //$scope.login = function() {
  //  $scope.modal.show();
  //};
  //
  //// Perform the login action when the user submits the login form
  //$scope.doLogin = function() {
  //  console.log('Doing login', $scope.loginData);
  //
  //  // Simulate a login delay. Remove this and replace with your login
  //  // code if using a login system
  //  $timeout(function() {
  //    $scope.closeLogin();
  //  }, 1000);
  //};

  $scope.openAbout = function() {
    var ref = cordova.InAppBrowser.open("http://dabblr.in/app/yogurt/about", "_blank", "location=no");
  };

  $scope.openLocations = function() {
    var ref = cordova.InAppBrowser.open("http://dabblr.in/app/yogurt/locations", "_blank", "location=no");
  };

  $scope.openInstagram = function() {
    var ref = cordova.InAppBrowser.open("http://dabblr.in/app/yogurt/instagram", "_blank", "location=no");
  };

  $scope.openReviews = function() {
    var ref = cordova.InAppBrowser.open("http://dabblr.in/app/yogurt/reviews", "_blank", "location=no");
  };

})


.controller('LoginCtrl', function($scope) {
  $scope.itemArray = [
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
})


.controller('HomeCtrl', function($scope) {
  $scope.bestsellers = [
    { image: 'img/pix.jpg', title: 'Mango Delight - 1', desc: 'Out now!' },
    { image: 'img/pix.jpg', title: 'Mango Delight - 2', desc: 'Out now!' },
    { image: 'img/pix.jpg', title: 'Mango Delight - 3', desc: 'Out now!' },
    { image: 'img/pix.jpg', title: 'Mango Delight - 4', desc: 'Out now!' }
  ];

  $scope.offers = [
    { image: 'img/pix.jpg', title: '20% OFF ON DIWALI', desc: 'Out now!' },
    { image: 'img/pix.jpg', title: '30% OFF ON DIWALI', desc: 'Out now!' },
    { image: 'img/pix.jpg', title: '40% OFF ON DIWALI', desc: 'Out now!' },
    { image: 'img/pix.jpg', title: '50% OFF ON DIWALI', desc: 'Out now!' }
  ];
})

.controller('MenuCtrl', function($scope) {
  $scope.itemArray = [
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

})

.controller('PlaceOrderCtrl', function($scope) {
  $scope.item = {
    image: 'img/pix.jpg',
    title: 'Mango Delight',
    desc: 'Out now!',
    text: 'Lorem lpsum dolor sit amet, conectetur adipiscing elit. Praesent non rhoncus urna, et commodo nunc. Nunc dignissim lectus lpsum, vitae fringilla elit ullamcorper a.'
  };
})

.controller('OrderOnlineCtrl', function($scope) {
  $scope.orders = [
    {image: 'img/pix.jpg', title: 'Mango Delight', small: 160, large: 160},
    {image: 'img/pix.jpg', title: 'Mango Delight', small: 160, large: 160}
  ];
})

.controller('SettingsCtrl', function($scope) {
  $scope.itemArray = [
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

  $scope.st1 = true;
  $scope.st2 = false;
  $scope.st3 = true;
})
;
