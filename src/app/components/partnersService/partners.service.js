'use strict';

/**
 * @ngdoc service
 * @name oostaoowebsiteApp.partnersService
 * @description
 * # partnersService
 */
  angular
      .module('app')
      .service('partnersService', partnersService);
      function partnersService() {
        var data = [                     
          {
            logo: 'assets/images/huguenin-logo.png',
            description: 'HUGUENIN C2I Spécialiste de l\'immobilier en Ile-de-france',
            descriptionContent: '',
            link1: '',
            link2: '',
            link3: '',
            imgLink1: 'assets/images/huguenin-facebook.jpg',
            imgLink2: 'assets/images/huguenin-twitter.jpg',
            imgLink3: 'assets/images/huguenin-insta.jpg',            
            colorBackground: ''
          }
        ];
        
        this.getPartnersServ = getPartnersServ;

        function getPartnersServ() {
          return data;
        }
      }
