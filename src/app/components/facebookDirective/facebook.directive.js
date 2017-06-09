'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:facebookDirective
 * @description
 * # facebookDirective
 */
angular.module('app')
  .directive('facebookDirective', function ($window) {
    return {
      templateUrl: 'app/components/facebookDirective/facebook.html',
      restrict: 'E',
      link: function draw() {

      $window.requestAnimFrame =
        $window.requestAnimationFrame || // La fonction d'origine que tous les navigateurs finiront par utiliser.
        $window.webkitRequestAnimationFrame || // Pour Chrome et Safari.
        $window.mozRequestAnimationFrame || // Pour Firefox.
        $window.ORequestAnimationFrame || // Pour Opera.
        $window.msRequestAnimationFrame // Pour Internet Explorer.az

        var canvas = angular.element('canvas')[0]
        canvas.width = $window.innerWidth;
        canvas.height = 250;
        var ctx = canvas.getContext('2d');

        var fond = new Image();   
        fond.src = '../assets/images/fondFacebook.jpg'; 

        function iconFacebook (){
          this.src = null;
          this.sx = 0;
          this.sy = 0;
          this.speed = null;
          this.sLargeur = null;
          this.sHauteur = null;
          this.dx = null;
          this.dy = null;
          this.dLargeur = null;
          this.dHauteur = null;
          this.mouvIcon = function(){
            this.dx += this.speed; 
            if(this.dx > canvas.width){
              this.dx = -160
            }
          }
        }

        var iconFb1 = new iconFacebook;
        iconFb1.speed = 6;
        iconFb1.sLargeur = 325;
        iconFb1.sHauteur = 325;
        iconFb1.dx = -100;
        iconFb1.dy = -20;
        iconFb1.dLargeur = iconFb1.sLargeur;
        iconFb1.dHauteur = iconFb1.sHauteur;
        var iconFb01 = new Image();
        iconFb01.src = "../assets/images/fb_icon.png";

        var iconFb2 = new iconFacebook;
        iconFb2.speed = 10;
        iconFb2.sLargeur = 163;
        iconFb2.sHauteur = 163;
        iconFb2.dx = -160;
        iconFb2.dy = 0;
        iconFb2.dLargeur = iconFb2.sLargeur;
        iconFb2.dHauteur = iconFb2.sHauteur;
        var iconFb02 = new Image();
        iconFb02.src = "../assets/images/fb_icon_small.png";

        var iconFb3 = new iconFacebook;
        iconFb3.speed = 4;
        iconFb3.sLargeur = 163;
        iconFb3.sHauteur = 163;
        iconFb3.dx = -200;
        iconFb3.dy = 70;
        iconFb3.dLargeur = iconFb3.sLargeur;
        iconFb3.dHauteur = iconFb3.sHauteur;
        var iconFb03 = new Image();
        iconFb03.src = iconFb02.src;

        var iconFb4 = new iconFacebook;
        iconFb4.speed = 12;
        iconFb4.sLargeur = 65;
        iconFb4.sHauteur = 65;
        iconFb4.dx = -200;
        iconFb4.dy = 120;
        iconFb4.dLargeur = iconFb4.sLargeur;
        iconFb4.dHauteur = iconFb4.sHauteur;
        var iconFb04 = new Image();
        iconFb04.src = "../assets/images/fb_icon_very_small.png";

        var iconFb5 = new iconFacebook;
        iconFb5.speed = 8;
        iconFb5.sLargeur = 65;
        iconFb5.sHauteur = 65;
        iconFb5.dx = -200;
        iconFb5.dy = 30;
        iconFb5.dLargeur = iconFb5.sLargeur;
        iconFb5.dHauteur = iconFb5.sHauteur;
        var iconFb05 = new Image();
        iconFb05.src = iconFb04.src;



        function drawCanvas(){
          ctx.drawImage(fond, 0, 0);
          ctx.drawImage(iconFb01, iconFb1.sx, iconFb1.sy, iconFb1.sLargeur, iconFb1.sHauteur, iconFb1.dx, iconFb1.dy, iconFb1.dLargeur, iconFb1.dHauteur)
          ctx.drawImage(iconFb02, iconFb2.sx, iconFb2.sy, iconFb2.sLargeur, iconFb2.sHauteur, iconFb2.dx, iconFb2.dy, iconFb2.dLargeur, iconFb2.dHauteur)
          ctx.drawImage(iconFb03, iconFb3.sx, iconFb3.sy, iconFb3.sLargeur, iconFb3.sHauteur, iconFb3.dx, iconFb3.dy, iconFb3.dLargeur, iconFb3.dHauteur)              
          ctx.drawImage(iconFb04, iconFb4.sx, iconFb4.sy, iconFb4.sLargeur, iconFb4.sHauteur, iconFb4.dx, iconFb4.dy, iconFb4.dLargeur, iconFb4.dHauteur)
          ctx.drawImage(iconFb05, iconFb5.sx, iconFb5.sy, iconFb5.sLargeur, iconFb5.sHauteur, iconFb5.dx, iconFb5.dy, iconFb5.dLargeur, iconFb5.dHauteur)                                                                                                                                  
        }


        angular.element("#modal").iziModal({
          width: 500
        });
        function clicCanvas(){
          angular.element('#canvas').click(function(){
            angular.element('#modal').iziModal('open');
            iconFb1.speed = 6;
            iconFb2.speed = 10;
            iconFb3.speed = 4;
            iconFb4.speed = 12;
            iconFb5.speed = 8; 
          });
        }
        clicCanvas();


        var start = null;
        var time = function(timestamp){
          var progress;
          if (!start) {
            start = timestamp;
          }
          progress = timestamp - start;
          if (progress >= 20) {
            iconFb1.mouvIcon();
            iconFb2.mouvIcon();
            iconFb3.mouvIcon();  
            iconFb4.mouvIcon(); 
            iconFb5.mouvIcon();                                                                               
            start = timestamp;
          }
          $window.requestAnimationFrame(time);
        };
          function starting() {
            time();
            drawCanvas();
            $window.requestAnimationFrame(starting);
          }
          starting();
      }
    };
  });
