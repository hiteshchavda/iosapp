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
    $scope.curTabId = 0;

    $scope.selectTab = function(id) {
      $scope.curTabId = id;

      $ionicSlideBoxDelegate.$getByHandle('aboutSlideBox').slide(id);
    };

    $scope.isTabActive = function(id) {
      return ($scope.curTabId == id);
    };

    $scope.slideHasChanged = function(id) {
      $scope.curTabId = id;
    };

  })





  .controller('MyAccountCtrl', function($scope, $ionicSlideBoxDelegate) {
    $scope.curTabId = 0;

    $scope.selectTab = function(id) {
      $scope.curTabId = id;

      $ionicSlideBoxDelegate.$getByHandle('myaccountSlideBox').slide(id);
    };

    $scope.isTabActive = function(id) {
      return ($scope.curTabId == id);
    };

    $scope.slideHasChanged = function(id) {
      $scope.curTabId = id;
    };

  })




  .controller('HomeCtrl', function($scope, $ionicModal, $state) {
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

    $scope.food = {
      image: 'img/pix.jpg', title: 'Belgian Chocolate', mini: 125, small: 225, large: 300,
      desc: 'Go Healthy with this super fruit from Brazil wichi leaves a tangy taste in your mouth!'
    };


    // modal add-food
    $ionicModal.fromTemplateUrl('templates/partials/add-food-modal.html', {
      scope: $scope,
    }).then(function(modal) {
      $scope.modalAddFood = modal;
    });
    $scope.openAddFoodModal = function() {
      $scope.modalAddFood.show();
    };
    $scope.closeAddFoodModal = function() {
      $scope.modalAddFood.hide();
    };


    $scope.openAddToppingsModal = function() {
      $scope.modalAddToppings.show();
    };
    $scope.closeAddToppingsModal = function() {
      $scope.modalAddToppings.hide();
    };
    $scope.doAddToCart = function() {
      $scope.closeAddToppingsModal();
      $state.go('app.cart');
    };


    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modalAddFood.remove();
      $scope.modalAddToppings.remove();
    });

    $scope.doAddToppings = function() {
      $scope.closeAddFoodModal();



      // modal add-toppings
      // add-toppings modal view
      $ionicModal.fromTemplateUrl('templates/partials/add-toppings-modal.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modalAddToppings = modal;
        $scope.modalAddToppings.show();
      });
    };

  })





  .controller('CartCtrl', function($scope) {
    $scope.orders = [
      {
        title: 'Acai Berry',
        type: 'yogurt',
        toppings: 'Mango',
        price: 205
      }
    ];
  })





    // OrderOnlineCtrl
  .controller('OrderOnlineCtrl', function($scope, $ionicModal, $ionicSlideBoxDelegate, $state) {

    //tabs
    $scope.curTabId = 0;

    $scope.selectTab = function(id) {
      $scope.curTabId = id;

      $ionicSlideBoxDelegate.$getByHandle('orderonlineSlideBox').slide(id);
    };

    $scope.isTabActive = function(id) {
      return ($scope.curTabId == id);
    };

    $scope.slideHasChanged = function(id) {
      $scope.curTabId = id;
    };

    // data
    $scope.yogurts = [
      {image: 'img/pix.jpg', title: 'Blueberry Cheesecake', mini: 130, small: 160, large: 360},
      {image: 'img/pix.jpg', title: 'Blueberry Cheesecake', mini: 130, small: 160, large: 360}
    ];

    $scope.waffles = [
      {image: 'img/pix.jpg', title: 'Belgian Chocolate', one: 125, two: 225, three: 300},
      {image: 'img/pix.jpg', title: 'Belgian Chocolate', one: 125, two: 225, three: 300}
    ];

    $scope.combos = [
      {image: 'img/pix.jpg', title: 'Oh So Berry Good', desc: 'Strawberry yogurt + Cheesecake bites + Strawberry Glaze', price: 220},
      {image: 'img/pix.jpg', title: 'Oh So Berry Good', desc: 'Strawberry yogurt + Cheesecake bites + Strawberry Glaze', price: 220}
    ];


    // add-toppings modal view
    $ionicModal.fromTemplateUrl('templates/partials/add-toppings-modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modalAddToppings = modal;
    });

    $scope.openAddToppingsModal = function() {
      $scope.modalAddToppings.show();
    };
    $scope.closeAddToppingsModal = function() {
      $scope.modalAddToppings.hide();
    };

    $scope.doAddToCart = function() {
      $scope.closeAddToppingsModal();
      $state.go('app.cart');
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modalAddToppings.remove();
    });

  })





  .controller('SettingsCtrl', function($scope) {

  })


  .controller('LocationsCtrl', function($scope) {
    $scope.locations = [
      'MUMBAI',
      'DELHI',
      'HYDERA',
      'FOURTH',
      'FIFTH'
    ];

    //tabs
    $scope.curTabId = 0;

    $scope.selectTab = function(id) {
      $scope.curTabId = id;

      $ionicSlideBoxDelegate.$getByHandle('locationsSlideBox').slide(id);
    };

    $scope.isTabActive = function(id) {
      return ($scope.curTabId == id);
    };

    $scope.slideHasChanged = function(id) {
      $scope.curTabId = id;
    };

  });

;
