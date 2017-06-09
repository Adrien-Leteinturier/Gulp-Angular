'use strict';

/**
 * @ngdoc service
 * @name oostaoowebsiteApp.technoService
 * @description
 * # technoService
 * Service in the oostaoowebsiteApp.
 */
  angular
      .module('app')
      .service('technoService', technoService);
      function technoService() {
        var data = [
          {
            title: 'Angular Js',
            src: 'assets/images/angular.png'
          },
          {
            title: 'Node Js',
            src: 'assets/images/nodejs.png'
          },
          {
            title: 'Boostrap',
            src: 'assets/images/boostrap.png'
          },
          {
            title: 'Css',
            src: 'assets/images/css.png'
          },
          {
            title: 'Html 5',
            src: 'assets/images/html.png'
          },
          {
            title: 'Javascript',
            src: 'assets/images/javascript.png'
          },
          {
            title: 'Jquery',
            src: 'assets/images/jquery.png'
          },
          {
            title: 'Sass',
            src: 'assets/images/sass.png'
          }                                           
        ];

        this.getTechnoServ = getTechnoServ;

        function getTechnoServ() {
          return data;
        }
      }
