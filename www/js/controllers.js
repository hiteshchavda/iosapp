angular.module('wafflebay.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.openFacebook = function() {
      //var ref = cordova.InAppBrowser.open("http://dabblr.in/app/yogurt/facebook", "_blank", "location=no");
    };

    $scope.openInstagram = function() {
      var ref = cordova.InAppBrowser.open("http://dabblr.in/app/yogurt/instagram", "_blank", "location=no");
    };

    $scope.openReviews = function() {
      var ref = cordova.InAppBrowser.open("http://dabblr.in/app/yogurt/reviews", "_blank", "location=no");
    };

  })





  .controller('LoginCtrl', function($scope) {

  })


  .controller('ChooseLocCtrl', function($scope) {
    $scope.chkid = 1;

    $scope.setActive = function(n) {
      $scope.chkid = n;
    };

    $scope.isActive = function(n) {
      return ($scope.chkid == n);
    };
  })





  .controller('AboutCtrl', function($scope, $ionicSlideBoxDelegate) {
    $scope.tabid = 0;

    $scope.selectTab = function(id) {
      $scope.tabid = id;

      $ionicSlideBoxDelegate.$getByHandle('aboutSlideBox').slide(id);
    };

    $scope.isTabActive = function(id) {
      return ($scope.tabid == id);
    };

    $scope.slideHasChanged = function(id) {
      $scope.tabid = id;
    };

  })





  .controller('MyAccountCtrl', function($scope, $ionicSlideBoxDelegate) {
    $scope.tabid = 0;

    $scope.selectTab = function(id) {
      $scope.tabid = id;

      $ionicSlideBoxDelegate.$getByHandle('myaccountSlideBox').slide(id);
    };

    $scope.isTabActive = function(id) {
      return ($scope.tabid == id);
    };

    $scope.slideHasChanged = function(id) {
      $scope.tabid = id;
    };

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





  .controller('PlaceOrderCtrl', function($scope) {
    $scope.item = {
      image: 'img/pix.jpg',
      title: 'Mango Delight',
      desc: 'Out now!',
      text: 'Lorem lpsum dolor sit amet, conectetur adipiscing elit. Praesent non rhoncus urna, et commodo nunc. Nunc dignissim lectus lpsum, vitae fringilla elit ullamcorper a.'
    };
  })





    // OrderOnlineCtrl
  .controller('OrderOnlineCtrl', function($scope, $ionicModal) {
    $scope.orders = [
      {image: 'img/pix.jpg', title: 'Mango Delight', small: 160, large: 160},
      {image: 'img/pix.jpg', title: 'Mango Delight', small: 160, large: 160}
    ];
  })





  .controller('SettingsCtrl', function($scope) {

    $scope.st1 = true;
    $scope.st2 = false;
    $scope.st3 = true;
  })


;
