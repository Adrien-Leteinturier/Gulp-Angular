(function() {
  'use strict';

  angular
    .module('app')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope,moment,scrollSmoothService) {
      var vm = this;

      $scope.smoothFunction = function(element) {
        scrollSmoothService.scrollTo(element);
      }
      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
      //Nav bar collapse//
      vm.isCollapsed = false;
      //Nav bar collapse ends//
    }
    
  }

})();
