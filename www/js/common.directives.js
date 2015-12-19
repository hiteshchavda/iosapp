angular.module('common.directives', ['ionic'])

  .directive('preImg', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        ratio:'@',
        helperClass: '@'
      },
      controller: function($scope) {
        $scope.loaded = false;

        this.hideSpinner = function(){
          // Think i have to use apply because this function is not called from this controller ($scope)
          $scope.$apply(function () {
            $scope.loaded = true;
          });
        };
      },
      templateUrl: 'templates/common/pre-img.html'
    };
  })

  .directive('spinnerOnLoad', function() {
    return {
      restrict: 'A',
      require: '^preImg',
      scope: {
        ngSrc: '@'
      },
      link: function(scope, element, attr, preImgController) {
        element.on('load', function() {
          preImgController.hideSpinner();
        });
      }
    };
  })


  .directive('backImg', function(){
    return function(scope, element, attrs){
      attrs.$observe('backImg', function(value) {
        element.css({
          'background-image': "url('" + value +"')"
        });
      });
    };
  })

;
