'use strict';

describe('scrollSmoothService', function () {

  // load the service's module
  beforeEach(module('oostaooWebsite'));

  // instantiate service
  var scrollSmoothService;
  beforeEach(inject(function (_scrollSmoothService_) {
    scrollSmoothService = _scrollSmoothService_;
  }));

  it('should do something', function () {
    expect(!!scrollSmoothService).toBe(true);
  });

});
