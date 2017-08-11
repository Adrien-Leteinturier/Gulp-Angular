'use strict';

describe('Directive: panoDirective', function () {

  // load the directive's module
  beforeEach(module('app'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pano-directive></pano-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the panoDirective directive');
  }));
});
