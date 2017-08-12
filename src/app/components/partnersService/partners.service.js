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
            imgLink1: 'huguenin-facebook.jpg',
            imgLink2: 'huguenin-twitter.jpg',
            imgLink3: 'huguenin-insta.jpg',            
            colorBackground: ''
          }
        ];
        
        this.getPartnersServ = getPartnersServ;

        function getPartnersServ() {
          return data;
        }
      }
