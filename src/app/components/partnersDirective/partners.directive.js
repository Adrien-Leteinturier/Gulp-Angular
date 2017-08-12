'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:partnersDirective
 * @description
 * # partnersDirective
 */
angular.module('app')
  .directive('partnersDirective',function(){
      return {
        restrict: 'E',
        templateUrl: 'app/components/partnersDirective/partners.html',
        link: function(){
        }
      };
    });


