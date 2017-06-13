'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:footerDirective
 * @description
 * # footerDirective
 */
angular.module('app')
  .directive('footerDirective',function(displayEffectService){
      return {
        restrict: 'E',
        templateUrl: 'app/components/footerDirective/footer.html',
        link: function(){
        },
        controller: function($scope) { 
          $scope.displayEffectFooter = function(scrollElement,element,effect) {
            displayEffectService.displayEffect(scrollElement,element,effect);
          }          
        }
      };
    });


