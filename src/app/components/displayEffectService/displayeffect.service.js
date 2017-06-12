'use strict';

/**
 * @ngdoc service
 * @name app.displayEffectService
 * @description
 * # displayEffectService
 * Service in the appApp.
 */
angular.module('app')
  .service('displayEffectService', function ($window,$log) {
      this.displayEffect = function(scrollElement,element,effect){
        angular.element($window).scroll(function(){
          var bottom_of_object =  angular.element(scrollElement).offset().top +  angular.element(scrollElement).outerHeight();
          var bottom_of_window =  angular.element(window).scrollTop() +  angular.element(window).height();
          $log.info(angular.element(scrollElement))
          if( bottom_of_window > bottom_of_object ){
            angular.element(element).addClass(effect);
            angular.element(element).css({display:'block'});
          }
        });
      }
      this.hoverDisplayEffect = function(hoverElement,element,effect){
        angular.element(hoverElement).mouseenter(function(){
          angular.element(element).addClass(effect);
        });        
      }
  });

