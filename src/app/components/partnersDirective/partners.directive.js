(function() {
'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:partnersDirective
 * @description
 * # partnersDirective
 */
    angular
    .module('app')
    .directive('partnersDirective', partnersDirective);
  
    /** @ngInject */
    function partnersDirective() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/partnersDirective/partners.html',
        controller: PartnersController,
        controllerAs: 'vm',
        bindToController: true  
      };
  
      return directive;      

    /** @ngInject */
    function PartnersController($scope) {
        $scope.data = [
          {
            logoH: 'assets/images/huguenin-logo.png',
            descriptionH: 'HUGUENIN C2I Spécialiste de l\'immobilier en Ile-de-france',
            descriptionContentH: '',
            link1H: '',
            link2H: '',
            link3H: '',
            imgLink1H: 'huguenin-facebook.jpg',
            imgLink2H: 'huguenin-twitter.jpg',
            imgLink3H: 'huguenin-insta.jpg',            
            colorBackgroundH: ''
          },
          {
            logoK: 'assets/images/kpsule-logo.png',
            descriptionK: 'HUGUENIN C2I Spécialiste de l\'immobilier en Ile-de-france'
          }        
        ]                     
      }
    }


  })();