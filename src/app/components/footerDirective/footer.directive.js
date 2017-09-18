'use strict';

/**
 * @ngdoc directive
 * @name app.directive:footerDirective
 * @description
 * # footerDirective
 */
angular.module('app')
  .directive('footerDirective',function(displayEffectService){
      return {
        restrict: 'E',
        templateUrl: 'app/components/footerDirective/footer.html',
        controller: function($scope) { 

          $scope.displayEffectFooter = function(scrollElement,element,effect) {
            displayEffectService.displayEffect(scrollElement,element,effect);
          }          

          $scope.map = {center: {latitude: 49.217415, longitude: 2.421670 }, zoom: 15 };
          $scope.options = {scrollwheel: false};
          $scope.coordsUpdates = 0;
          $scope.dynamicMoveCtr = 0;
          $scope.marker = {
            id: 0,
            coords: {
              latitude: 49.217415,
              longitude: 2.421670
            },
            options: { draggable: false }
          };
          $scope.windowOptions = {
            boxClass: "infobox",
            boxStyle: {
              backgroundColor: "#1174BB",
              borderRadius : "5px",
              width: "200px",
              height: "120px",
              padding:"10px",
              marginBottom: "20px",
              color:"white"
            },
            content: "<h5>Adrien Leteinturier</h5>----------------------- " +
            "<a href='mailto:adrienleteinturier@gmail.com' style='color:white; text-decoration:none;'>adrienleteinturier@gmail.com</a>" + "<p>06 18 33 96 13</p>" + 
            "<h6>Saint leu d'esserent 60340<h6>",
            disableAutoPan: true,
            maxWidth: 0,

            zIndex: null,
            closeBoxMargin: "10px",
            closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",

            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false
          };
          $scope.onClick = function(marker, eventName, model) {
            model.show = !model.show;
            $scope.activeModel = model;
          };    
          //Map ends//         
        }
      };
    });


