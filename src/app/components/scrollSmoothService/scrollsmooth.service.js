'use strict';

/**
 * @ngdoc service
 * @name oostaooWebsiteApp.scrollSmoothService
 * @description
 * # scrollSmoothService
 * Service in the oostaooWebsiteApp.
 */
angular.module('app')
  .service('scrollSmoothService', function () {

      this.scrollTo = function(element){
        var offset = angular.element(element).offset().top 
        angular.element('html, body').animate({scrollTop: offset}, 'slow'); 
      }

});
    

