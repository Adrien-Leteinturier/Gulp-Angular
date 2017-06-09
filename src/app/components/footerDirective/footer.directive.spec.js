'use strict';

describe('Directive: footerDirective', function () {

  // load the directive's module
  beforeEach(module('app'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<footer-directive></footer-directive>');
    element = $compile(element)(scope);
  }));
});
