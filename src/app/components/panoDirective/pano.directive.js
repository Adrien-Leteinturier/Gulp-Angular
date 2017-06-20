'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:panoDirective
 * @description
 * # aframeDirective
 */
angular.module('app')
  .directive('panoDirective', function () {
    return {
      templateUrl: 'app/components/panoDirective/pano.html',
      restrict: 'E',
      link: function onVrViewLoad() {
        var viewer = new Kaleidoscope.Image({source: 'assets/images/cv360.jpg', containerId: '#vrview'});
        viewer.render();
      }
    };
  });
