'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:twitterDirective
 * @description
 * # twitterDirective
 */
angular.module('app')
  .directive('twitterDirective', function ($window,$log) {
    return {
      templateUrl: 'app/components/twitterDirective/twitter.html',
      restrict: 'E',
      link: function draw(){

        angular.element("#modalTwitter").iziModal({
          width: 500
        });
        function clicCanvas(){
          angular.element('#canvasTwitter').click(function(){
            angular.element('#modalTwitter').iziModal('open');
            iconFb1.speed = 6;
            iconFb2.speed = 10;
            iconFb3.speed = 4;
            iconFb4.speed = 12;
            iconFb5.speed = 8; 
          });
        }
        clicCanvas();

      $window.requestAnimFrame =
        $window.requestAnimationFrame || // La fonction d'origine que tous les navigateurs finiront par utiliser.
        $window.webkitRequestAnimationFrame || // Pour Chrome et Safari.
        $window.mozRequestAnimationFrame || // Pour Firefox.
        $window.ORequestAnimationFrame || // Pour Opera.
        $window.msRequestAnimationFrame // Pour Internet Explorer.az

        var canvasTwitter = angular.element('#canvasTwitter')[0]
        canvasTwitter.width = $window.innerWidth;
        canvasTwitter.height = 250;
        var ctx = canvasTwitter.getContext('2d');

        function spriteTwitter (){
          this.src = null;
          this.sx = 0;
          this.sy = 0;
          this.speed = null;
          this.sLargeur = 150;
          this.sHauteur = 150;
          this.dx = null;
          this.dy = null;
          this.dLargeur = 150;
          this.dHauteur = 150;
          this.rows = 1;
          this.cols = 4;
          this.curFrame = 10;
          this.frameCount = 3;          
          this.mouvIcon = function(){
            this.dx -= this.speed; 
        $log.info(this.dx);
            
            if(this.dx < -$window.innerWidth){
              this.dx = canvasTwitter.width;
              $log.info('ici oiseau')
            }
          }
          this.spriteMouv = function(){ 
            this.curFrame = ++this.curFrame % this.frameCount;
            this.sy = (this.curFrame + 1) * this.sHauteur;
          }          
        }

        var bandeauTwitter = {
          src : '../assets/images/bandeTwitter.png',
          sx : -80,
          sy : 0,
          speed : 10,
          sLargeur : 808,
          sHauteur : 174,
          dx : canvasTwitter.width,
          dy : 40,
          dLargeur : 808,
          dHauteur : 174,        
          mouvIcon : function(){
            this.dx -= this.speed; 
            if(this.dx < -$window.innerWidth){
              this.dx = canvasTwitter.width;
               $log.info('ici bandeau')
            }
          }                  
        }

        var bandeau = new Image;
        bandeau.src = bandeauTwitter.src;

        var sprite1 = new spriteTwitter;
        sprite1.speed = 10;
        sprite1.dx = canvasTwitter.width;
        sprite1.dy = 40;
        var sprite01 = new Image();
        sprite01.src = '../assets/images/spriteTwitter.png'; 


        function drawCanvas(){
          ctx.fillStyle="#FFFFFF";
          ctx.fillRect(0,0,$window.innerWidth,250);
          ctx.drawImage(bandeau, bandeauTwitter.sx, bandeauTwitter.sy, bandeauTwitter.sLargeur, bandeauTwitter.sHauteur, bandeauTwitter.dx, bandeauTwitter.dy, bandeauTwitter.dLargeur, bandeauTwitter.dHauteur)                                                                                                                                                                                                                                                                     
          ctx.drawImage(sprite01, sprite1.sx, sprite1.sy, sprite1.sLargeur, sprite1.sHauteur, sprite1.dx, sprite1.dy, sprite1.dLargeur, sprite1.dHauteur) 
        }

        var start = null;
        var time = function(timestamp){
          var progress;
          if (!start) {
            start = timestamp;
          }
          progress = timestamp - start;
          if (progress >= 20) {
            sprite1.mouvIcon();        
            sprite1.spriteMouv();     
            bandeauTwitter.mouvIcon();                                                                
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
