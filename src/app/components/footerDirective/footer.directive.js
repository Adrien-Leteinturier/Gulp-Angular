'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:footerDirective
 * @description
 * # footerDirective
 */
angular.module('app')
  .directive('footerDirective', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/components/footerDirective/footer.html'
    };
  });

