(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http,$timeout, $log, webDevTec, toastr, displayEffectService, technoService, partnersService) {
    var vm = this;

    //Scroll Effect
    vm.activeDisplayEffect = function(scrollElement,element,effect) {
      displayEffectService.displayEffect(scrollElement,element,effect);
    }
    vm.activeHoverDisplayEffect = function(hoverElement,element,effect){
      displayEffectService.hoverDisplayEffect(hoverElement,element,effect);
    }

    // ShowToastrSerice
    vm.classAnimation = 'rubberBand';
    vm.showToastr = showToastr;
    function showToastr() {
      toastr.info('<a href="https://github.com/Adrien-Leteinturier" target="_blank"><img src="../assets/images/github-toastr.png" alt="github-toastr"></a>');
    }


    function getPartnersServ(){
      vm.awesomePartners = partnersService.getPartnersServ();
      angular.forEach(vm.awesomePartners, function(awesomePartners) {
        awesomePartners.rank = Math.random();
      });
    }

    function getWebTechnoServ(){
      vm.awesomeTechs = technoService.getTechnoServ();
      angular.forEach(vm.awesomeTechs, function(awesomeTech) {
        awesomeTech.rank = Math.random();
      });
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();
      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    function activate() {
      getWebDevTec();
      getWebTechnoServ();
      getPartnersServ();
    }
    activate();
  }
})();
