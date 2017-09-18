'use strict';

/**
 * @ngdoc directive
 * @name app.directive:modalDirective
 * @description
 * # modalDirective
 */
angular.module('app')
  .directive('modalDirective',function($log){
    var path = 'app/components/modalDirective/';
    return {
      restrict: 'E',
      templateUrl: function(tElement, tAttrs) {
        return path + tAttrs.template + '.html';
      },   
      scope: {
        sendMail: '&'
      },
      link:function(scope, element, attrs){
        $log.info(attrs.init)
        angular.element('#' + attrs.init).iziModal({
          title: attrs.title || 'Choice the tile modal',
          subtitle: attrs.subtitle,
          headerColor: attrs.headerColor || '#6d7d8d',
          width: attrs.width || '300px',
          top: attrs.top || null,
          bottom: attrs.bottom || null,
          transitionIn: attrs.transitionIn,
          transitionOut: attrs.transitionOut,
          borderBottom: attrs.borderBottom || false,
          padding: attrs.padding || 0,
          radius: attrs.radius || 3,
          zindex: attrs.zindex || 999,
          icon : attrs.icon              
        });        
          scope.sendMail = function(){
          angular.element("#contactForm").submit(function(event){
              // cancels the form submission
              event.preventDefault();
              submitForm();
            });                    
          }
          function submitForm(){
              // Initiate Variables With Form Content
              var name = angular.element("#name").val();
              var email = angular.element("#email").val();
              var message = angular.element("#message").val();

              $log.info(name);
          
              angular.element.ajax({
                  type: "POST",
                  url: "php/form-process.php",
                  data: "name=" + name + "&email=" + email + "&message=" + message,
                  success : function(text){
                      if (text == "success"){
                          formSuccess();
                      }
                  }
              });
          }
          function formSuccess(){
              angular.element( "#msgSubmit" ).removeClass( "hidden" );
          }             
      },      
      controller: function($scope,$log) {
        $scope.openModal = function(id){
          $log.info('open modal');
          angular.element(id).iziModal('open');
        }          

      }
    };
  });


